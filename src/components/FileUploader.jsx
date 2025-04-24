import { useState } from 'react';
import { uploadToCloudinary } from '../services/uploadService';

const FileUploader = () => {
  const [fileUrl, setFileUrl] = useState('');

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const url = await uploadToCloudinary(file);
    if (url) {
      setFileUrl(url);
      console.log('File uploaded successfully:', url);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {fileUrl && (
        <div>
          {fileUrl.includes('image') ? (
            <img src={fileUrl} alt="Uploaded" style={{ width: '300px' }} />
          ) : (
            <video controls src={fileUrl} style={{ width: '300px' }} />
          )}
        </div>
      )}
    </div>
  );
};

export default FileUploader;