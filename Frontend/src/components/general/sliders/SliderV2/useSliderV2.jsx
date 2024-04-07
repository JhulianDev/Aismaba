import { useState } from "react";

const useSliderV2 = (product) => {
  const imagesLength = product.galleryImages.length;

  const [currentImage, setCurrentImage] = useState(0);

  const handleClickSlider = (direction) => {
    if (direction === "right") {
      setCurrentImage((currentImage + 1) % imagesLength);
    }
    if (direction === "left") {
      setCurrentImage((currentImage - 1 + imagesLength) % imagesLength);
    }
  };

  return { currentImage, imagesLength, handleClickSlider };
};

export default useSliderV2;