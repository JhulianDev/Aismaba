import { useContext } from "react";
import { CurrencyContextV2 } from "../../../../context/CurrencyContextV2";
import { BoxImage, BoxPrice, ButtonAddToCart, ButtonViewProduct, CardContainer, CartIcon, Description, Div, FooterCard, Image, Price, Title, ToolTip } from "./CardV4Styles";
import ADD_TO_CART_ICON from "../../../../assets/img/generales/add_to_cart_icon.svg";

const CardV4 = ({ product }) => {
  const { currencySelected } = useContext(CurrencyContextV2);
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

          <ButtonAddToCart to="/">
            <CartIcon src={ADD_TO_CART_ICON} alt="Add to cart icon" />
            <ToolTip>Añadir al carrito</ToolTip>
          </ButtonAddToCart>

        </Div>

        <Title>{product.name}</Title>
        <Description>{product.description}</Description>

        <ButtonViewProduct to={`/tienda/plantilla/${product.id}`}>Ver Plantilla</ButtonViewProduct>
      </FooterCard>

    </CardContainer>
  );
};

export default CardV4;