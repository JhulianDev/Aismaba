import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { EMAIL_ICON, ISOTIPO_ACENTO, PASSWORD_ICON, USER_ICON, WORLD_ICON } from "../../../../assets/img/images";
import { BoxInput, Input, InputIcon, LoginForm, LoginLogo, Option, RedirectButton, Select, SubmitButton } from "./LoginCardStyled";
import { ShopContext } from "../../../../context/ShopContext";
import { handleForm } from "../../../../helpers/forms";
import { UserContext } from "../../../../context/UserContext";
import { CartContext } from "../../../../context/CartContext";
import Loader from "../../Loader/Loader";

const LoginCard = ({ submitText, redirectText, linkButton, type, apiUrl, redirectLink }) => {
  const { paises } = useContext(ShopContext)
  const { setUserData } = useContext(UserContext);
  const { requireLogin } = useContext(CartContext)
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  if (loading) return <Loader height={"100vh"}/>

  return (
    <LoginForm onSubmit={(e) => handleForm(e, type, apiUrl, redirectLink, requireLogin, navigate, setUserData, loading, setLoading)}>
      <LoginLogo src={ISOTIPO_ACENTO} alt="Isotipo Aismaba" />

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
          <InputIcon src={WORLD_ICON} alt="Icono del mundo" />
          <Select name="country">
            <Option value="">Selecciona tu País</Option>
            {paises.map((pais) => (
              <Option key={pais} value={pais}>{pais}</Option>
            ))}
          </Select>
        </BoxInput>
      )}

      <BoxInput>
        <InputIcon src={PASSWORD_ICON} alt="Icono de contraseña" />
        <Input type="password" name="password" placeholder="Contraseña" />
      </BoxInput>

      <SubmitButton>{submitText}</SubmitButton>
      <RedirectButton to={linkButton}>{redirectText}</RedirectButton>
    </LoginForm>
  );
};

export default LoginCard;