import { useContext, useState } from "react";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { BoxButtonPayment, BoxItem, CardContainer, Currency, Price, Product, ProductName, ProductPrice, Title } from "./TarjetaCheckOutStyled";
import { CartContext } from "../../../../context/CartContext";
import PaypalPayment from "../../paypal/PaypalPayment";
import { MERCADOPAGO_KEY } from "../../../../env/env";
import Loader from "../../Loader/Loader";
import useCurrencyStore from "../../../../stores/useCurrencyStore";
import useCartStore from "../../../../stores/useCartStore";

const TarjetaCheckout = () => {
  const { order, preferenceId } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  const { cartItems, totalPrice } = useCartStore();
  const { currencySelected } = useCurrencyStore();
  initMercadoPago(MERCADOPAGO_KEY);

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
        <Price>{totalPrice(currencySelected)} {currencySelected}</Price>
      </BoxItem>

      {order && loading ? (
        <Loader height="100px" />
      ) : null}

      {order && currencySelected === "USD" && (
        <BoxButtonPayment $marginTop="15px">
          <PaypalPayment value={totalPrice(currencySelected)} createdOrder={order} setLoading={setLoading} />
        </BoxButtonPayment>
      )}

      {order && currencySelected === "ARS" && (
        <BoxButtonPayment>
          <Wallet initialization={{ preferenceId }} onReady={() => {setLoading(false)}} />
        </BoxButtonPayment>
      )}

    </CardContainer>
  );
};

export default TarjetaCheckout;