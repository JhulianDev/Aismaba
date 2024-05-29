import axios from "axios";
import { useEffect } from "react";
import { API_URL } from "../../../env/env";
import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";
import { BoxButtons, ButtonLink, Description, Title } from "./GraciasStyles";
import { coloresV2 } from "../../../assets/css/Colors";
import useUserStore from "../../../stores/useUserStore";
import useCartStore from "../../../stores/useCartStore";

const Gracias = () => {
  const { userToken } = useUserStore.getState();
  const { clearCart } = useCartStore()

  // Funcion para procesar el pago en el backend
  const processPayment = async (url, id, token) => {
    try {
      // Realizamos la solicitud a la ruta indicada para procesar el pago
      const response = await axios.post(url, id, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Si la petición es exitosa mostramos la respuesta del backend
      console.log('Respuesta de la petición:', response);
      // Si la petición da error mostramos el error:
    } catch (error) {
      console.error('Error en la petición:', error);
    }
  }

  useEffect(() => {
    // Extraemos el order_id de los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const order_id = urlParams.get('order_id');
    // Eliminamos el contenido del carrito:
    clearCart();
    // Si el pago fue realizado con Paypal hacemos la petición a la ruta correspondiente
    if (order_id) {
      processPayment(`${API_URL}/paypal/process_payment`, { order_id }, userToken);
    }
  }, []);

  return (
    <Section $bgColor={coloresV2.colorSecundario}>
      <MaxWidth $flexDirection="column" $justifyContent="center">
        <Title>¡Felicidades!</Title>
        <Description>Compra realizada con éxito</Description>
        <BoxButtons>
          <ButtonLink to="/mis-compras">Ver compras</ButtonLink>
        </BoxButtons>
      </MaxWidth>
    </Section>
  );
};

export default Gracias;