// useImageSlider.js
import { useState, useContext } from "react";
import { ShopContext } from "../../../../context/ShopContext";

const useImageSlider = (producto) => {
  const { plantillas, marcas } = useContext(ShopContext);
  const dataProducto = plantillas.find(item => item.nombre === producto) || marcas.find(item => item.nombre === producto);
  const imagenesLength = dataProducto.imagenes.length;

  const [currentImage, setCurrentImage] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "right") {
      setCurrentImage((currentImage + 1) % imagenesLength);
    }
    if (direction === "left") {
      setCurrentImage((currentImage - 1 + imagenesLength) % imagenesLength);
    }
  };

  return { dataProducto, currentImage, imagenesLength, handleArrow };
};

export default useImageSlider;
