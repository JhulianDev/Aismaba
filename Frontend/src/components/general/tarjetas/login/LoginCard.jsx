import { useNavigate } from 'react-router-dom';
import { BoxInput, Input, InputIcon, LoginForm, LoginLogo, RedirectButton, SubmitButton } from "./LoginCardStyled";
import { handleForm } from "../../../../helpers/forms";
import Loader from "../../Loader/Loader";
import ISOTIPO from "../../../../assets/img/generales/isotipo_gris.svg"
import USER_ICON from "../../../../assets/img/generales/user_icon.svg"
import EMAIL_ICON from "../../../../assets/img/generales/email_icon.svg"
import FLAG_ICON from "../../../../assets/img/generales/flag_icon.svg"
import PADLOK_ICON from "../../../../assets/img/generales/padlock_icon.svg"
// import { useContext, useState } from "react";
// import { ShopContext } from "../../../../context/ShopContext";
// import { UserContext } from "../../../../context/UserContext";
// import { CartContext } from "../../../../context/CartContext";

const LoginCard = ({ submitText, redirectText, linkButton, type, apiUrl, redirectLink }) => {
  // const { paises } = useContext(ShopContext)
  // const { setUserData } = useContext(UserContext);
  // const { requireLogin } = useContext(CartContext)
  // const [loading, setLoading] = useState();
  const navigate = useNavigate();

  // if (loading) return <Loader height={"100vh"}/>

  return (
    <LoginForm onSubmit={(e) => handleForm(e, type, apiUrl, redirectLink, requireLogin, navigate, setUserData, loading, setLoading)}>
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


      {/* {type === "SignUp" && (
        <BoxInput>
          <InputIcon src={WORLD_ICON} alt="Icono del mundo" />
          <Select name="country">
            <Option value="">Selecciona tu País</Option>
            {paises.map((pais) => (
              <Option key={pais} value={pais}>{pais}</Option>
            ))}
          </Select>
        </BoxInput>
      )} */}

      <BoxInput>
        <InputIcon src={PADLOK_ICON} alt="Icono de contraseña" />
        <Input type="password" name="password" placeholder="Contraseña" />
      </BoxInput>

      <SubmitButton>{submitText}</SubmitButton>
      <RedirectButton to={linkButton}>{redirectText}</RedirectButton>
    </LoginForm>
  );
};

export default LoginCard;