import { useState } from "react";

const useSliderV1 = () => {
  const [cardSelected, setCardSelected] = useState(2)
  const [touchStartX, setTouchStartX] = useState(0);

  // Uso del slider mediante los citulos
  const handleCircles = (card) => {
    setCardSelected(card)
  }

  // Uso del slider mediante desplazamiento horizontal
  const handleTouchStart = (e) => {
    // Almacena la posición inicial del toque en el eje X
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    // Obtiene la posición final del toque en el eje X
    const touchEndX = e.changedTouches[0].clientX;
    // Calcula la distancia recorrida durante el deslizamiento
    const deltaX = touchEndX - touchStartX;

    // Comprueba la dirección del deslizamiento
    if (deltaX > 0) {
      // Deslizamiento hacia la derecha
      // Reduce el valor de cardSelected asegurándose de que no sea menor que 1
      setCardSelected((prev) => Math.max(prev - 1, 1));
    } else if (deltaX < 0) {
      // Deslizamiento hacia la izquierda
      // Aumenta el valor de cardSelected asegurándose de que no sea mayor que 3
      setCardSelected((prev) => Math.min(prev + 1, 3));
    }
  };

  return { cardSelected, handleCircles, handleTouchStart, handleTouchEnd };
}

export default useSliderV1;