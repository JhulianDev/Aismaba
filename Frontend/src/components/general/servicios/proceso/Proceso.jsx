import { coloresV2 } from "../../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { Box, Description, Image, MainContainer, Step, Subtitle, Title } from "./ProcesoStyles";

const Proceso = ({ title, steps, image, bgColor }) => {
  return (
    <Section $height="100px" $borderBottom $bgColor={bgColor}>
      <MaxWidth>
        <MainContainer>

          <Box $title>
            <Title>{title}</Title>
          </Box>

          {steps.map((step) => (
            <Box key={step.id}>
              <Step>{step.number}</Step>
              <Subtitle>{step.subtitle}</Subtitle>
              <Description>{step.description}</Description>
            </Box>
          ))}

          <Box $image>
            <Image src={image} alt="Mockup Servicio" />
          </Box>

        </MainContainer>
      </MaxWidth>
    </Section>
  );
};

export default Proceso;