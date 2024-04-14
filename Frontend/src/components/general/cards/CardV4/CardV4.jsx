import { useNavigate } from 'react-router-dom';
import { BoxImage, BoxPrice, ButtonAddToCart, ButtonViewProduct, CardContainer, CartIcon, Description, Div, FooterCard, Image, Price, Title, ToolTip } from "./CardV4Styles";
import ADD_TO_CART_ICON from "../../../../assets/img/generales/add_to_cart_icon.svg";
import useCartStore from "../../../../stores/useCartStore";
import useCurrencyStore from '../../../../stores/useCurrencyStore';

const CardV4 = ({ product }) => {
  const { currencySelected } = useCurrencyStore();
  const { addToCart } = useCartStore();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/carrito");
  };
  return (
    <CardContainer>
      <BoxImage>
        <Image src={product.coverImage} alt="MockUp Product" />
      </BoxImage>

      <FooterCard>
        <Div>
          <BoxPrice>
            <Price>$ {product.price[currencySelected]} {currencySelected} </Price>
          </BoxPrice>

          <ButtonAddToCart onClick={handleAddToCart}>
            <CartIcon src={ADD_TO_CART_ICON} alt="Add to cart icon" />
            <ToolTip>Añadir al carrito</ToolTip>
          </ButtonAddToCart>

        </Div>

        <Title>{product.name}</Title>
        <Description>{product.type}</Description>

        <ButtonViewProduct to={`/tienda/plantilla/${product.id}`}>Ver Plantilla</ButtonViewProduct>
      </FooterCard>

    </CardContainer>
  );
};

export default CardV4;