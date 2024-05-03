import { useEffect } from "react";
import TarjetaCheckout from "../../general/tarjetas/checkout/TarjetaCheckout";
import { Section } from "./CheckoutStyled";

const Checkout = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section>
      <TarjetaCheckout />
    </Section>
  );
};

export default Checkout;