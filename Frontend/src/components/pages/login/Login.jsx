import { colores } from "../../../assets/css/Colors";
import Footer from "../../general/footer/Footer";
import LoginCard from "../../general/tarjetas/login/LoginCard";
import { Section } from "./LoginStyled";

const Login = () => {
  return (
    <>
      <Section>
        <LoginCard
          type="Login"
          submitText="Iniciar Sesión"
          redirectText="Registrarse"
          linkButton="/sign-up"
          apiUrl="/login"
          redirectLink="/"
        />
      </Section>

      <Footer color={colores.colorSecundario} />
    </>
  );
};

export default Login;