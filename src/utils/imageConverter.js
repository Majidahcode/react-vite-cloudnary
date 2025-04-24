export const convertToWebP = async (file) => {
    // مثال باستخدام مكتبة `webp-converter` (تثبيتها أولاً)
    const webpBlob = await window.WebP.convert(file, { quality: 0.8 });
    return new File([webpBlob], `${file.name.split('.')[0]}.webp`, { type: 'image/webp' });
  };