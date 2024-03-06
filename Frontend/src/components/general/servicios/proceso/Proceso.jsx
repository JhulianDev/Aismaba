import { coloresV2 } from "../../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { Box, Description, Image, MainContainer, Step, Subtitle, Title } from "./ProcesoStyles";
import IMAGE_PROCESS from "../../../../assets/img/generales/portada-tienda.png"

const Proceso = () => {
  return (
    <Section $height="100px" $borderBottom $bgColor={coloresV2.colorPrincipal}>
      <MaxWidth>
        <MainContainer>

          <Box $title>
            <Title>Proceso de desarrollo</Title>
          </Box>

          <Box>
            <Step>01</Step>
            <Subtitle>LLAMADA INICIAL</Subtitle>
            <Description>
              Nos reuniremos en una videollamada para conocernos y hablar sobre las necesidades que tiene tu marca. ¡Queremos conocer tu historia para transmitir tu esencia y valores únicos!
            </Description>
          </Box>

          <Box>
            <Step>02</Step>
            <Subtitle>LLAMADA INICIAL</Subtitle>
            <Description>
              Nos reuniremos en una videollamada para conocernos y hablar sobre las necesidades que tiene tu marca. ¡Queremos conocer tu historia para transmitir tu esencia y valores únicos!
            </Description>
          </Box>

          <Box>
            <Step>03</Step>
            <Subtitle>LLAMADA INICIAL</Subtitle>
            <Description>
              Nos reuniremos en una videollamada para conocernos y hablar sobre las necesidades que tiene tu marca. ¡Queremos conocer tu historia para transmitir tu esencia y valores únicos!
            </Description>
          </Box>

          <Box>
            <Step>04</Step>
            <Subtitle>LLAMADA INICIAL</Subtitle>
            <Description>
              Nos reuniremos en una videollamada para conocernos y hablar sobre las necesidades que tiene tu marca. ¡Queremos conocer tu historia para transmitir tu esencia y valores únicos!
            </Description>
          </Box>

          <Box>
            <Step>05</Step>
            <Subtitle>LLAMADA INICIAL</Subtitle>
            <Description>
              Nos reuniremos en una videollamada para conocernos y hablar sobre las necesidades que tiene tu marca. ¡Queremos conocer tu historia para transmitir tu esencia y valores únicos!
            </Description>
          </Box>

          <Box>
            <Step>06</Step>
            <Subtitle>LLAMADA INICIAL</Subtitle>
            <Description>
              Nos reuniremos en una videollamada para conocernos y hablar sobre las necesidades que tiene tu marca. ¡Queremos conocer tu historia para transmitir tu esencia y valores únicos!
            </Description>
          </Box>

          <Box>
            <Step>07</Step>
            <Subtitle>LLAMADA INICIAL</Subtitle>
            <Description>
              Nos reuniremos en una videollamada para conocernos y hablar sobre las necesidades que tiene tu marca. ¡Queremos conocer tu historia para transmitir tu esencia y valores únicos!
            </Description>
          </Box>

          <Box $image>
            <Image src={IMAGE_PROCESS} alt="Mockup Servicio" />
          </Box>

        </MainContainer>
      </MaxWidth>
    </Section>
  );
};

export default Proceso;