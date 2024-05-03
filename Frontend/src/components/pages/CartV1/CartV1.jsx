import { useNavigate } from 'react-router-dom';
import { coloresV2 } from "../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";
import CurrencySelectorV2 from "../../general/currencySelector/CurrencySelectorV2";
import useCurrencyStore from "../../../stores/useCurrencyStore";
import useCartStore from "../../../stores/useCartStore";
import { BoxIcon, ButtonIcon, ContainerProduct, ContainerTable, DeleteIcon, LinkButton, Price, Product, ProductImage, ProductName, ProductPrice, PurchaseButton, TableFooter, TableHeader, Title, Total, TotalPrice } from "./CartV1Styles";
import DELETE_ICON from "../../../assets/img/generales/delete_icon.svg"
import CARD_ICON from "../../../assets/img/generales/credit_card_icon.svg"
import BASKET_ICON from "../../../assets/img/generales/basket_icon.svg"
import { handleOrder } from "../../../helpers/handleOrder";
import Loader from '../../general/Loader/Loader';
import { useEffect, useState } from 'react';

const CartV1 = () => {
  const [loading, setLoading] = useState();
  const { cartItems, removeFromCart, totalAmount } = useCartStore();
  const { currencySelected } = useCurrencyStore();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <Loader
        height={"100vh"}
        bgColor={true}
      />
    );
  }

  return (
    <Section $align={cartItems.length > 0 ? "top" : "center"} $bgColor={coloresV2.colorSecundario}>
      <MaxWidth $alignItems="top" $flexDirection="column" >

        {cartItems.length > 0 ? (
          <>
            <Title>Selecciona tu moneda de pago:</Title>
            <CurrencySelectorV2 />

            <ContainerTable>
              <TableHeader>
                <Product>Producto</Product>
                <Price>Precio</Price>
              </TableHeader>

              {cartItems.map((item) => (
                <ContainerProduct key={item.id}>
                  <ProductImage src={item.coverImage} alt="Product Image" />
                  <ProductName>{item.name}</ProductName>
                  <ProductPrice>{item.price[currencySelected]} {currencySelected}</ProductPrice>
                  <BoxIcon onClick={() => removeFromCart(item.id)}>
                    <DeleteIcon src={DELETE_ICON} alt="Delete Icon" />
                  </BoxIcon>
                </ContainerProduct>
              ))}

              <TableFooter>
                <Total>Total</Total>
                <TotalPrice>{totalAmount(currencySelected)} {currencySelected}</TotalPrice>
              </TableFooter>
            </ContainerTable>

            <PurchaseButton onClick={() => { handleOrder(navigate, setLoading) }}>
              Finalizar Compra
              <ButtonIcon $typeA src={CARD_ICON} alt="Card Icon" />
            </PurchaseButton>

            <LinkButton to="/tienda">
              Ver más productos
              <ButtonIcon src={BASKET_ICON} alt="Basket Icon" />
            </LinkButton>
          </>
        ) : (
          <>
            <Title>Tu carrito está vacío</Title>
            <LinkButton $typeB to="/tienda">Ir a la tienda</LinkButton>
          </>
        )}


      </MaxWidth>
    </Section>
  );
};

export default CartV1;