import { BoxButton, ButtonIcon, ButtonLink } from "./ButtonStyled";

const Button = ({ type, icono, texto, enlace, top }) => {
  return (
    <BoxButton $type={type} $top={top}>
      <ButtonIcon src={icono} alt="Icon" />
      <ButtonLink to={enlace}>{texto}</ButtonLink>
    </BoxButton>
  );
};

export default Button;