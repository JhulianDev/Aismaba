import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";
import { Arrow, BoxCounter, BoxPrice, BoxTexts, Button, Counter, Description, Image, MainContainer, MovilSlider, Price, Title, WindowSlider } from "./SliderV2Styles";
import ARROW_ICON from "../../../../assets/img/generales/arrow_icon.svg"
import useSliderV2 from "./useSliderV2";
import useCartStore from "../../../../stores/useCartStore";
import useCurrencyStore from "../../../../stores/useCurrencyStore";

const SliderV2 = ({ product }) => {
  const { currentImage, imagesLength, handleClickSlider } = useSliderV2(product)
  const { currencySelected } = useCurrencyStore();
  const { addToCart } = useCartStore();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/carrito");
  };

  return (
    <MainContainer>
      <WindowSlider>

        <MovilSlider $currentImage={currentImage}>
          {product.galleryImages.map((image) => (
            <Image key={uuidv4()} src={image} alt="Image Product" />
          ))}
        </MovilSlider>

        <Arrow onClick={() => handleClickSlider("left")} src={ARROW_ICON} alt="Arrow icon" $left />
        <Arrow onClick={() => handleClickSlider("right")} src={ARROW_ICON} alt="Arrow icon" $right />

        <BoxCounter>
          <Counter>{`${currentImage + 1}/${imagesLength}`}</Counter>
        </BoxCounter>
      </WindowSlider>

      <BoxTexts>
        <BoxPrice>
          <Price>$ {product.price[currencySelected]} {currencySelected} </Price>
        </BoxPrice>
        <Title>{product.name}</Title>
        <Description>
          Encontrarás 27 Plantillas Editables en Canva. Podrás modificarlas y personalizarlas para que se adapten al estilo de tu marca cambiando los colores, imágenes, textos y elementos.
        </Description>
        <Button onClick={handleAddToCart}>Agregar al carrito</Button>
      </BoxTexts>


    </MainContainer>
  );
};

export default SliderV2;