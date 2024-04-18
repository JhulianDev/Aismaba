import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../../env/env";
import useUserStore from "../../../stores/useUserStore";
import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";
import { coloresV2 } from "../../../assets/css/Colors";
import { BoxButtons, ButtonLink, Description, Title } from "./GraciasStyles";
import Loader from "../../general/Loader/Loader";

const Gracias = () => {
  const [orderStatus, setOrderStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userToken } = useUserStore.getState();

  useEffect(() => {
    // Extraer el payment_id de los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const payment_id = urlParams.get('payment_id');

    // Verificar si hay payment_id antes de hacer la solicitud
    if (payment_id) {
      // Realizar la solicitud al backend para verificar el pago
      axios.post(`${API_URL}/mercado_pago/verify_payment`, { payment_id }, {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      })
        .then((response) => {
          // Mostramos la respuesta del backend
          console.log('Respuesta de la petición:', response);
          // Actualizar el estado de orderStatus con el estado de la orden recibido en la respuesta
          setOrderStatus(response.data.order_status)
          setLoading(false);
        })
        .catch((error) => {
          // Mostramos el error de la petición
          console.error('Error en la petición:', error);
          // Actualizar el estado de orderStatus con el estado de la orden recibido en la respuesta
          setOrderStatus(error.response.data.order_status)
          setLoading(false);
        });
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