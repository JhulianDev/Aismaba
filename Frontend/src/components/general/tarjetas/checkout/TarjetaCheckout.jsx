import { useState } from "react";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { BoxButtonPayment, BoxItem, CardContainer, Currency, Price, Product, ProductName, ProductPrice, Title } from "./TarjetaCheckoutStyled";
import PaypalPayment from "../../paypal/PaypalPayment";
import { MERCADOPAGO_KEY } from "../../../../env/env";
import Loader from "../../Loader/Loader";
import useCurrencyStore from "../../../../stores/useCurrencyStore";
import useCartStore from "../../../../stores/useCartStore";
import useOrderStore from "../../../../stores/useOrderStore";

const TarjetaCheckout = () => {
  const [loading, setLoading] = useState(true);
  const { orderId, orderPreferenceId } = useOrderStore();
  const { cartItems, totalAmount } = useCartStore();
  const { currencySelected } = useCurrencyStore();
  initMercadoPago(MERCADOPAGO_KEY, { locale: "es-AR" });

  return (
    <CardContainer>
      <BoxItem>
        <Title>Tu pedido</Title>
        <Currency>${currencySelected}</Currency>
      </BoxItem>

      <BoxItem>
        <Product>Producto</Product>
        <Price>Precio</Price>
      </BoxItem>

      {cartItems.map((item) => (
        <BoxItem key={item.id}>
          <ProductName>{item.name}</ProductName>
          <ProductPrice>{item.price[currencySelected]} {currencySelected}</ProductPrice>
        </BoxItem>
      ))}

      <BoxItem>
        <Product>Monto Total:</Product>
        <Price>{totalAmount(currencySelected)} {currencySelected}</Price>
      </BoxItem>

      {orderId && loading && (
        <Loader height="100px" />
      )}

      {orderId && (currencySelected === "USD" || currencySelected === "EUR") && (
        <BoxButtonPayment $marginTop="15px">
          <PaypalPayment value={totalAmount(currencySelected)} currency={currencySelected} orderId={orderId} setLoading={setLoading} />
        </BoxButtonPayment>
      )}

      {orderId && currencySelected === "ARS" && (
        <BoxButtonPayment>
          <Wallet initialization={{ preferenceId: orderPreferenceId, redirectMode: "self" }} onReady={() => { setLoading(false) }} />
        </BoxButtonPayment>
      )}

    </CardContainer>
  );
};

export default TarjetaCheckout;