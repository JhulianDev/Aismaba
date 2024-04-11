import { BoxInput, Input, InputIcon, LoginForm, LoginLogo, RedirectButton, SubmitButton } from "./LoginCardStyled";
import ISOTIPO from "../../../../assets/img/generales/isotipo_gris.svg"
import USER_ICON from "../../../../assets/img/generales/user_icon.svg"
import EMAIL_ICON from "../../../../assets/img/generales/email_icon.svg"
import FLAG_ICON from "../../../../assets/img/generales/flag_icon.svg"
import PADLOK_ICON from "../../../../assets/img/generales/padlock_icon.svg"

const LoginCard = ({ type, link, handleSubmit }) => {

  return (
    <LoginForm onSubmit={handleSubmit}>
      <LoginLogo src={ISOTIPO} alt="Isotipo Aismaba" />

      {type === "SignUp" && (
        <BoxInput>
          <InputIcon src={USER_ICON} alt="Icono de usuario" />
          <Input type="text" name="user_name" placeholder="Nombre" />
        </BoxInput>
      )}

      <BoxInput>
        <InputIcon src={EMAIL_ICON} alt="Icono de email" />
        <Input type="text" name="email" placeholder="Correo electrónico" />
      </BoxInput>

      {type === "SignUp" && (
        <BoxInput>
          <InputIcon src={FLAG_ICON} alt="Icono de bandera" />
          <Input type="text" name="country" placeholder="País" />
        </BoxInput>
      )}

      <BoxInput>
        <InputIcon src={PADLOK_ICON} alt="Icono de contraseña" />
        <Input type="password" name="password" placeholder="Contraseña" />
      </BoxInput>

      {type === "SignUp" ? (
        <>
          <SubmitButton>Registrarse</SubmitButton>
          <RedirectButton to={link}>Iniciar Sesión</RedirectButton>
        </>
      ) : (
        <>
          <SubmitButton>Iniciar Sesión</SubmitButton>
          <RedirectButton to={link}>Registrarse</RedirectButton>
        </>
      )}
    </LoginForm>
  );
};

export default LoginCard;