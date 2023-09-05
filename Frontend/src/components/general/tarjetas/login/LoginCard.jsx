import { EMAIL_ICON, ISOTIPO_ACENTO, PASSWORD_ICON, USER_ICON, WORLD_ICON } from "../../../../assets/img/images";
import { BoxInput, Input, InputIcon, LoginForm, LoginLogo, Option, RedirectButton, Select, SubmitButton } from "./LoginCardStyled";

const LoginCard = ({ type, submitText, redirectText, link }) => {
  return (
    <LoginForm>
      <LoginLogo src={ISOTIPO_ACENTO} alt="Isotipo Aismaba" />

      <BoxInput>
        <InputIcon src={USER_ICON} alt="Icono de usuario" />
        <Input type="text" name="user_name" placeholder="Nombre" />
      </BoxInput>

      {type === "registration" && (
        <>
          <BoxInput>
            <InputIcon src={EMAIL_ICON} alt="Icono de email" />
            <Input type="text" name="user_name" placeholder="Correo electrónico" />
          </BoxInput>

          <BoxInput>
            <InputIcon src={WORLD_ICON} alt="Icono del mundo" />
            <Select>
              <Option disabled selected>Selecciona tu País</Option>
              <Option>Argentina</Option>
              <Option>Chile</Option>
              <Option>España</Option>
              <Option>México</Option>
              <Option>Venezuela</Option>
            </Select>
          </BoxInput>

        </>
      )}

      <BoxInput>
        <InputIcon src={PASSWORD_ICON} alt="Icono de contraseña" />
        <Input type="password" name="password" placeholder="Contraseña" />
      </BoxInput>

      <SubmitButton>{submitText}</SubmitButton>
      <RedirectButton to={link}>{redirectText}</RedirectButton>
    </LoginForm>
  );
};

export default LoginCard;