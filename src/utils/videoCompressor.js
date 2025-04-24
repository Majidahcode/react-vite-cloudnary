import { createFFmpeg } from '@ffmpeg/ffmpeg';

export const compressVideo = async (file) => {
  const ffmpeg = createFFmpeg({ log: true });
  await ffmpeg.load();
  
  // كتابة الملف إلى نظام FFmpeg الافتراضي
  ffmpeg.FS('writeFile', 'input.mp4', new Uint8Array(await file.arrayBuffer()));
  
  // تشغيل أمر الضغط
  await ffmpeg.run('-i', 'input.mp4', '-vf', 'scale=720:-2', '-c:v', 'libx264', 'output.mp4');
  
  // قراءة الناتج
  const data = ffmpeg.FS('readFile', 'output.mp4');
  return new File([data.buffer], 'compressed.mp4', { type: 'video/mp4' });
};