// src/utils/cloudinaryUpload.js
import axios from 'axios';

export const uploadFileToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "your_upload_preset");

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`,
      formData
    );
    console.log("File uploaded successfully:", response.data.url);
    return response.data.url; // رابط الصورة أو الفيديو المرفوع
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

export const uploadAllFiles = async () => {
  const files = [
    "/path/to/image1.jpg", // استبدل هذا بالمسارات الفعلية
    "/path/to/image2.png", // استبدل هذا بالمسارات الفعلية
    "/path/to/video.mp4", // استبدل هذا بالمسارات الفعلية
  ];

  for (let filePath of files) {
    const file = new File([filePath], filePath.split('/').pop(), { type: "image/jpeg" }); // أو النوع المناسب
    await uploadFileToCloudinary(file);
  }
};
