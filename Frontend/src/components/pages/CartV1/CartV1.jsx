import { coloresV2 } from "../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";
import CurrencySelectorV2 from "../../general/currencySelector/CurrencySelectorV2";
import { BoxIcon, ContainerProduct, ContainerTable, DeleteIcon, Price, Product, ProductImage, ProductName, ProductPrice, TableHeader, Title } from "./CartV1Styles";
import DELETE_ICON from "../../../assets/img/generales/delete_icon.svg"
import useCartStore from "../../../stores/useCartStore";
import { useContext } from "react";
import { CurrencyContextV2 } from "../../../context/CurrencyContextV2";

const CartV1 = () => {
  const { cartItems } = useCartStore();
  const { currencySelected } = useContext(CurrencyContextV2);
  return (
    <Section $align="top" $bgColor={coloresV2.colorSecundario}>
      <MaxWidth $alignItems="top" $flexDirection="column" >
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
              <ProductPrice>$ {item.price[currencySelected]} {currencySelected}</ProductPrice>
              <BoxIcon>
                <DeleteIcon src={DELETE_ICON} alt="Delete Icon" />
              </BoxIcon>
            </ContainerProduct>
          ))}
        </ContainerTable>
      </MaxWidth>
    </Section>
  );
};

export default CartV1;