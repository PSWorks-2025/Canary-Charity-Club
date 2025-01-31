import { useState, useEffect } from "react";

const useImagePreloader = (sections) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = sections
        .filter((section) => section.image?.src)
        .map((section) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = section.image.src;
            img.onload = resolve;
            img.onerror = resolve; // Prevent blocking in case of errors
          });
        });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    loadImages();
  }, [sections]);

  return imagesLoaded;
};

export default useImagePreloader;
