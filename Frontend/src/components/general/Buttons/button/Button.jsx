import { BoxButton, ButtonButton, ButtonIcon, ButtonLink } from "./ButtonStyled";

const Button = ({ style, type, icono, iconoEnlace, texto, enlace, handleClick, top }) => {
  return (
    <BoxButton $style={style} $top={top}>
      {icono === "true" && (
        <ButtonIcon src={iconoEnlace} alt="Icon" />
      )}

      {type === "Link" ? (
        <ButtonLink to={enlace}>{texto}</ButtonLink>
      ) : (
        <ButtonButton onClick={handleClick}>{texto}</ButtonButton>
      )}
    </BoxButton>
  );
};

export default Button;