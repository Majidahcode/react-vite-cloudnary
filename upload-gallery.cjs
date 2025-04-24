require('dotenv').config();

const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2;

// إعدادات Cloudinary من ملف env
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// أنواع الملفات حسب الامتداد
const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
const videoExtensions = [".mp4", ".mov", ".avi", ".webm", ".mkv"];

// ✨ المسار الصحيح للمجلد الجذري
const assetBasePath = path.join(__dirname, "public/images-2");

const uploadedUrls = {};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function getRelativePublicPath(filePath) {
  return path.relative(path.join(__dirname, "public"), filePath).replace(/\\/g, "/");
}

async function uploadFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const relPath = getRelativePublicPath(filePath);

  const folderPath = path.dirname(relPath);
  const publicId = path.basename(filePath, ext);
  const resourceType = imageExtensions.includes(ext)
    ? "image"
    : videoExtensions.includes(ext)
    ? "video"
    : null;

  if (!resourceType) return;

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: resourceType,
      folder: folderPath,
      public_id: publicId,
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    });

    uploadedUrls[`/${relPath}`] = result.secure_url;
    console.log(`✅ Uploaded: ${relPath}`);
  } catch (err) {
    console.error(`❌ Failed: ${relPath}`, err.message);
  }
}

async function main() {
  const allFiles = [];

  walkDir(assetBasePath, (filePath) => {
    allFiles.push(filePath);
  });

  for (const file of allFiles) {
    await uploadFile(file);
  }

  fs.writeFileSync(
    "cloudinary-urls.json",
    JSON.stringify(uploadedUrls, null, 2),
    "utf-8"
  );

  console.log("🚀 Finished uploading all files.");
  console.log("🌐 URLs saved to cloudinary-urls.json");
}

main();
