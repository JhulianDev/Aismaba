import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../../env/env";
import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";
import { BoxButtons, ButtonLink, Description, Title } from "./GraciasStyles";
import { coloresV2 } from "../../../assets/css/Colors";
import useUserStore from "../../../stores/useUserStore";
import useCartStore from "../../../stores/useCartStore";
import Loader from "../../general/Loader/Loader";

const Gracias = () => {
  const [orderStatus, setOrderStatus] = useState(null);
  const [loading, setLoading] = useState(true);
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
      // Si la petición es exitosa:
      // Mostramos la respuesta del backend
      console.log('Respuesta de la petición:', response);
      // Actualizamos el orderStatus con el estado de la orden recibido en la respuesta
      setOrderStatus(response.data.order_status);
      // Eliminamos el contenido del carrito:
      clearCart();
      // Detenemos el loading
      setLoading(false);
      // Si la petición da error:
    } catch (error) {
      // Mostramos el error de la petición
      console.error('Error en la petición:', error);
      // Actualizamos el orderStatus con el estado de la orden recibido en la respuesta
      setOrderStatus(error.response.data.order_status);
      // Detenemos el loading
      setLoading(false);
    }
  }

  useEffect(() => {
    // Extraemos el payment_id o el order_id de los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const payment_id = urlParams.get('payment_id');
    const order_id = urlParams.get('order_id');

    // Si el pago fue realizado con MercadoPago hacemos la petición a la ruta correspondiente
    if (payment_id) {
      processPayment(`${API_URL}/mercado_pago/process_payment`, { payment_id }, userToken);
    }

    // Si el pago fue realizado con Paypal hacemos la petición a la ruta correspondiente
    if (order_id) {
      processPayment(`${API_URL}/paypal/process_payment`, { order_id }, userToken);
    }
  }, []);

  return (
    <Section $bgColor={coloresV2.colorSecundario}>
      <MaxWidth $flexDirection="column" $justifyContent="center">
        {loading ? (
          <Loader
            height={"100px"}
          />
        ) : (
          <>
            {orderStatus === 'completed' ? (
              <>
                <Title>¡Felicidades!</Title>
                <Description>Compra realizada con éxito</Description>
                <BoxButtons>
                  <ButtonLink to="/mis-compras">Ver compras</ButtonLink>
                </BoxButtons>
              </>
            ) : (
              <>
                <Title $error>No pudimos procesar su pago</Title>
                <Description>Inténtelo nuevamente o contáctenos</Description>
                <BoxButtons>
                  <ButtonLink $shop to="/tienda">Volver a intentar</ButtonLink>
                  <ButtonLink to="https://wa.link/ue6ne6" target="_blank">Contáctenos</ButtonLink>
                </BoxButtons>
              </>
            )}
          </>
        )}
      </MaxWidth>
    </Section>
  );
};

export default Gracias;