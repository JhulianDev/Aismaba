import { coloresV2 } from "../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";
import CurrencySelectorV2 from "../../general/currencySelector/CurrencySelectorV2";
import useCurrencyStore from "../../../stores/useCurrencyStore";
import useCartStore from "../../../stores/useCartStore";
import { BoxIcon, ButtonIcon, ContainerProduct, ContainerTable, DeleteIcon, LinkButton, Price, Product, ProductImage, ProductName, ProductPrice, PurchaseButton, TableFooter, TableHeader, Title, Total, TotalPrice } from "./CartV1Styles";
import DELETE_ICON from "../../../assets/img/generales/delete_icon.svg"
import CARD_ICON from "../../../assets/img/generales/credit_card_icon.svg"
import BASKET_ICON from "../../../assets/img/generales/basket_icon.svg"

const CartV1 = () => {
  const { cartItems, removeFromCart, totalPrice } = useCartStore();
  const { currencySelected } = useCurrencyStore();
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
                <TotalPrice>{totalPrice(currencySelected)} {currencySelected}</TotalPrice>
              </TableFooter>
            </ContainerTable>

            <PurchaseButton>
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