import { colores } from "../../../assets/css/Colors";
import { LOTTIE_GRACIAS } from "../../../assets/lotties/lotties";
import ButtonLink from "../../general/Buttons/contacto/ButtonLink";
import ContactoButton from "../../general/Buttons/contacto/ButtonLink";
import Footer from "../../general/footer/Footer";
import { GraciasBox, GraciasBoxLottie, GraciasDetalles, GraciasParrafo, GraciasSection, GraciasSubtitulo, GraciasTitulo } from "./GraciasStyled";
import Lottie from "lottie-react"

const Gracias = () => {
  return (
    <>
      <GraciasSection>
        <GraciasBox>

          <GraciasBoxLottie>
            <Lottie animationData={LOTTIE_GRACIAS} />
          </GraciasBoxLottie>

          <GraciasTitulo>¡Felicidades!</GraciasTitulo>

          <GraciasSubtitulo>
            Tu mensaje fue enviado con exito y sera respondido lo mas pronto posible.
          </GraciasSubtitulo>

          <GraciasDetalles>
            Recibiras los detalles de tu pedido en tu correo electronico.
          </GraciasDetalles>

          <ButtonLink enlace="/tienda" texto="Tienda Online" />
        </GraciasBox>
      </GraciasSection>

      <Footer color={colores.colorPrincipal} />
    </>
  );
};

export default Gracias;