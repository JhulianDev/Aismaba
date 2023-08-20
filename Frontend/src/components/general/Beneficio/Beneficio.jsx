import { BeneficioBox, BeneficioCustomLottie, BeneficioDescripcion } from "./BeneficioStyled";

const Beneficio = ({ lottie, descripcion }) => {
  return (
    <BeneficioBox>
      <BeneficioCustomLottie animationData={lottie} />
      <BeneficioDescripcion>{descripcion}</BeneficioDescripcion>
    </BeneficioBox>
  );
};

export default Beneficio;