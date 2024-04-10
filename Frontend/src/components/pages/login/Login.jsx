import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";
import { coloresV2 } from "../../../assets/css/Colors";
import LoginCard from "../../general/tarjetas/login/LoginCard";

const Login = () => {
  return (
    <Section $bgColor={coloresV2.colorSecundario}>
      <MaxWidth $justifyContent="center">

        <LoginCard
          type="Login"
          submitText="Iniciar Sesión"
          redirectText="Registrarse"
          linkButton="/sign-up"
          apiUrl="/login"
          redirectLink="/"
        />

      </MaxWidth>
    </Section>
  );
};

export default Login;