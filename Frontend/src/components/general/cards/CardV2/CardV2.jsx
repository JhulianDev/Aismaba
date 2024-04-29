import { BoxImage, BoxText, CardContainer, Hover, Icon, Image, Title } from "./CardV2Styles";
import ARROW_ICON from "../../../../assets/img/generales/home/arrow_icon.svg"

const CardV2 = ({ data }) => {
  return (
    <CardContainer to={data.link}>
      <BoxImage>
        <Hover>VER MÁS</Hover>
        <Image src={data.image} alt={data.alt} />
      </BoxImage>
      
      <BoxText>
        <Title>{data.title}</Title>
        <Icon src={ARROW_ICON} alt="Arrow icon" />
      </BoxText>
    </CardContainer>
  );
};

export default CardV2;