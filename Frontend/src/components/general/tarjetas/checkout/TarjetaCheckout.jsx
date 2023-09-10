import { useContext } from "react";
import { BoxItem, CardContainer, Currency, Price, Product, ProductName, ProductPrice, Title } from "./TarjetaCheckOutStyled";
import { CartContext } from "../../../../context/CartContext";
import { CurrencyContext } from "../../../../context/CurrencyContext";

const TarjetaCheckout = () => {
  const { state } = useContext(CartContext)
  const { selectedCurrency, dolarValue } = useContext(CurrencyContext);

  const formatPrice = new Intl.NumberFormat("es-AR", {
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })

  let totalValue = 0
  state.cart.forEach((c) => selectedCurrency === "ARS" ? (totalValue += (c.precio) * dolarValue) : (totalValue += (c.precio)));
  let totalValueFormated = formatPrice.format(totalValue)

  return (
    <CardContainer>

      <BoxItem>
        <Title>Tu pedido</Title>
        <Currency>${selectedCurrency}</Currency>
      </BoxItem>


      <BoxItem>
        <Product>Producto</Product>
        <Price>Precio</Price>
      </BoxItem>

      {state.cart.map((producto) => (
        <BoxItem key={producto.nombre}>
          <ProductName>{producto.nombre}</ProductName>
          <ProductPrice>${selectedCurrency === "ARS" ? formatPrice.format((producto.precio * dolarValue)) : formatPrice.format(producto.precio)}</ProductPrice>
        </BoxItem>
      ))}

      <BoxItem>
        <Product>Monto Total:</Product>
        <Price>${totalValueFormated}</Price>
      </BoxItem>
    </CardContainer>
  );
};

export default TarjetaCheckout;