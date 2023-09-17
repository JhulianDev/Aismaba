import { useEffect } from "react";
import axios from "axios";
import { colores } from "../../../assets/css/Colors";
import { LOTTIE_GRACIAS } from "../../../assets/lotties/lotties";
import ButtonLink from "../../general/Buttons/contacto/ButtonLink";
import Footer from "../../general/footer/Footer";
import { GraciasBox, GraciasBoxLottie, GraciasDetalles, GraciasSection, GraciasSubtitulo, GraciasTitulo } from "./GraciasStyled";
import Lottie from "lottie-react"
import { API_URL } from "../../../env/env";
import { getToken } from "../../../helpers/token";

const Gracias = () => {

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const payment_id = urlParams.get('payment_id');

    // Verifica si hay payment_id antes de hacer la solicitud
    if (payment_id) {
      axios.post(`${API_URL}/mercado_pago/verify_payment`, { payment_id }, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
        .then((response) => {
          console.log('Respuesta de la petición:', response);
        })
        .catch((error) => {
          console.error('Error en la petición:', error);
        });
    }
  }, []);


  return (
    <>
      <GraciasSection>
        <GraciasBox>

          <GraciasBoxLottie>
            <Lottie animationData={LOTTIE_GRACIAS} />
          </GraciasBoxLottie>

          <GraciasTitulo>¡Felicidades!</GraciasTitulo>

          <GraciasSubtitulo>
            Compra realizada con exito
          </GraciasSubtitulo>

          <GraciasDetalles>
            ¡Disfruta de tus productos!
          </GraciasDetalles>

          <ButtonLink enlace="/mis-compras" texto="Ver Productos" />
        </GraciasBox>
      </GraciasSection>

      <Footer color={colores.colorPrincipal} />
    </>
  );
};

export default Gracias;