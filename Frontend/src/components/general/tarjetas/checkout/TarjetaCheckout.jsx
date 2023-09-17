import { useContext } from "react";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { BoxButtonPayment, BoxItem, CardContainer, Currency, Price, Product, ProductName, ProductPrice, Title } from "./TarjetaCheckOutStyled";
import { CartContext } from "../../../../context/CartContext";
import { CurrencyContext } from "../../../../context/CurrencyContext";
import PaypalPayment from "../../paypal/PaypalPayment";
import { calculateTotalValue, formatPrice } from "../../../../helpers/prices";
import { MERCADOPAGO_KEY } from "../../../../env/env";

const TarjetaCheckout = () => {
  const { state, order, preferenceId } = useContext(CartContext);
  const { selectedCurrency, dolarValue } = useContext(CurrencyContext);
  initMercadoPago(MERCADOPAGO_KEY);

  const totalValue = calculateTotalValue(state.cart, selectedCurrency, dolarValue)

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
        <Price>${(formatPrice.format(totalValue))}</Price>
      </BoxItem>

      {order && selectedCurrency === "USD" && (
        <BoxButtonPayment $marginTop="15px">
          <PaypalPayment value={totalValue} createdOrder={order} />
        </BoxButtonPayment>
      )}

      {order && selectedCurrency === "ARS" && (
        <BoxButtonPayment>
          <Wallet initialization={{ preferenceId }} />
        </BoxButtonPayment>
      )}

    </CardContainer>
  );
};

export default TarjetaCheckout;