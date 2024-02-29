import { coloresV2 } from "../../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { Description, Image, Title } from "./DescripcionServicioStyles";
import SliderAuto from "../../sliders/sliderAuto/SliderAuto";

const DescripcionServicio = ({ title, description, images }) => {
  return (
    <Section $borderBottom $align="top" $height="500px" $bgColor={coloresV2.colorSecundario}>
      <MaxWidth $flexDirection="column">
        
        <Title>{title}</Title>
        <Description>{description}</Description>

        <SliderAuto>
          {images.map((image) => (
            <Image key={image.id} src={image.image} alt="Instakit Portafolio" $mobile={image.mobile} />
          ))}
        </SliderAuto>

      </MaxWidth>
    </Section>
  );
};

export default DescripcionServicio;