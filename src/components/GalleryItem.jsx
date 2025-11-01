import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default function GalleryItem({ src, alt, thumbnail }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        style={{ cursor: 'pointer', display: 'inline-block' }}
        onClick={() => setIsOpen(true)}
      >
        <img src={thumbnail || src} alt={alt} style={{ width: '100%' }} />
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={src}
          onCloseRequest={() => setIsOpen(false)}
          imageCaption={alt}
        />
      )}
    </>
  );
}
