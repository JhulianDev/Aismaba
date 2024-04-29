import { coloresV2 } from "../../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { Box, ClipIcon, Description, MainContainer, Presentation, Subtitle, Title } from "./PilaresServicioStyles";
import CLIP_ICON from "../../../../assets/img/generales/clip_icon.svg"

const PilaresServicio = ({ presentation, title, items }) => {
  return (
    <Section $height="100px" $borderBottom $bgColor={coloresV2.colorSecundario}>
      <MaxWidth>
        <MainContainer>

          <Box $presentation>
            <Presentation>{presentation}</Presentation>
          </Box>

          <Box $title>
            <Title>{title}</Title>
          </Box>

          {items.map((item) => (
            <Box key={item.id} $description>
              <Subtitle>{item.subtitle}</Subtitle>
              <Description>{item.description}</Description>
              <ClipIcon src={CLIP_ICON} alt="Clip Icon" />
            </Box>
          ))}


        </MainContainer>
      </MaxWidth>
    </Section>
  );
};

export default PilaresServicio;