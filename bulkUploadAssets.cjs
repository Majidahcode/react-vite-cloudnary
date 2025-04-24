require('dotenv').config();
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');

// استخدم المتغيرات البيئية من Vite
const CLOUD_NAME = process.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.VITE_CLOUDINARY_UPLOAD_PRESET;

if (!CLOUD_NAME || !UPLOAD_PRESET) {
  console.error('❌ تأكد من وجود المتغيرات البيئية VITE_CLOUDINARY_CLOUD_NAME و VITE_CLOUDINARY_UPLOAD_PRESET في ملف .env');
  process.exit(1);
}

// رفع ملف واحد إلى Cloudinary
async function uploadFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    return null;
  }

  const form = new FormData();
  const fileStream = fs.createReadStream(filePath);
  const filename = path.basename(filePath); // الحصول على اسم الملف فقط

  form.append('file', fileStream, { filename }); // إضافة الاسم هنا
  form.append('upload_preset', UPLOAD_PRESET);

  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

  try {
    const res = await axios.post(url, form, {
      headers: form.getHeaders()
    });
    return res.data.secure_url;
  } catch (err) {
    console.error(`❌ Failed to upload ${filePath}:`, err.message);
    return null;
  }
}

async function main() {
  const folders = [
    'images',
    'images-2',
    'images-projects',
    'img-about',
    'video-project'
  ];

  const allFiles = [];

  for (const folder of folders) {
    const dirPath = path.join(__dirname, 'public', folder);
    if (!fs.existsSync(dirPath)) {
      console.warn(`⚠ Folder not found: ${dirPath}`);
      continue;
    }

    const files = fs.readdirSync(dirPath)
      .filter(f => /\.(jpe?g|png|gif|mp4|mov|webm)$/i.test(f))
      .map(f => ({
        fullPath: path.join(dirPath, f),
        localPath: `./${folder}/${f}`
      }));

    allFiles.push(...files);
  }

  const mapping = {};
  for (const { fullPath, localPath } of allFiles) {
    console.log(`📤 Uploading ${localPath} ...`);
    const url = await uploadFile(fullPath);
    if (url) {
      console.log(`✅ Uploaded: ${url}`);
      mapping[localPath] = url;
    } else {
      console.warn(`⚠ Skipped: ${localPath}`);
    }
  }

  const outPath = path.join(__dirname, 'src', 'assetsMapping.json');
  fs.writeFileSync(outPath, JSON.stringify(mapping, null, 2));
  console.log(`✔ Mapping saved to ${outPath}`);
}

main().catch(console.error);
