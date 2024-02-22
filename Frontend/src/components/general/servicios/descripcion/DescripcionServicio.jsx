import { coloresV2 } from "../../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { Description, Image, Title } from "./DescripcionServicioStyles";
import PORTFOLIO_INSTAKIT_A from "../../../../assets/img/generales/portfolio_instakit_1.jpg"
import PORTFOLIO_INSTAKIT_B from "../../../../assets/img/generales/portfolio_instakit_2.jpg"
import PORTFOLIO_INSTAKIT_C from "../../../../assets/img/generales/portfolio_instakit_3.jpg"
import PORTFOLIO_INSTAKIT_D from "../../../../assets/img/generales/portfolio_instakit_4.jpg"
import SliderAuto from "../../sliders/sliderAuto/SliderAuto";

const DescripcionServicio = () => {
  return (
    <Section $align="top" $height="500px" $bgColor={coloresV2.colorSecundario}>
      <MaxWidth $flexDirection="column">
        <Title>Dale una imagen atractiva y armoniosa a tu perfil de Instagram.</Title>
        <Description>
          Un servicio <b>rápido y práctico</b> para darle una <b>estética de impacto</b> a tu perfil de Instagram. Ofrecemos plantillas <b>100% editables en Canva</b>, diseñadas para <b>reflejar la identidad de tu marca</b>, desde la paleta de colores hasta las tipografías y el estilo de fotografía.
        </Description>

        <SliderAuto>
          <Image src={PORTFOLIO_INSTAKIT_A} alt="Instakit Portafolio" />
          <Image src={PORTFOLIO_INSTAKIT_B} alt="Instakit Portafolio" />
          <Image src={PORTFOLIO_INSTAKIT_C} alt="Instakit Portafolio" />
          <Image src={PORTFOLIO_INSTAKIT_D} alt="Instakit Portafolio" />
          <Image src={PORTFOLIO_INSTAKIT_A} alt="Instakit Portafolio" $mobile />
        </SliderAuto>
      </MaxWidth>
    </Section>
  );
};

export default DescripcionServicio;