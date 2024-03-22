import { v4 as uuidv4 } from 'uuid';
import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { ContainerGallery, Image, Subtitle, Title } from './PortfolioV2Styles';

const PortfolioV2 = ({ title, subtitle, images, bgColor }) => {
  return (
    <Section $bgColor={bgColor} $height="100px" $borderBottom>
      <MaxWidth $flexDirection="column">
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>

        <ContainerGallery>
          {images.map((image) => (
            <Image key={uuidv4()} src={image} alt='MockUp Portafolio' />
          ))}
        </ContainerGallery>
        
      </MaxWidth>
    </Section>
  );
};

export default PortfolioV2;