import { BoxCardStep, BoxStep, BoxTexts, Description, Image, Number, Title } from "./CardStepStyles";

const CardStep = ({ position, number, image, alt, title, description, bgColor, border  }) => {
  return (
    <BoxCardStep>
      <BoxStep $position={position}>
        <Number $position={position} $bgColor={bgColor} $border={border}>{number}</Number>
        <Image $position={position} $border={border} src={image} alt={alt} />
      </BoxStep>

      <BoxTexts $position={position}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </BoxTexts>
    </BoxCardStep>
  );
};

export default CardStep;