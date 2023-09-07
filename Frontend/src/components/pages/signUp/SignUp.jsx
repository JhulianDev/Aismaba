import { colores } from "../../../assets/css/Colors";
import Footer from "../../general/footer/Footer";
import LoginCard from "../../general/tarjetas/login/LoginCard";
import { Section } from "../login/LoginStyled";

const SignUp = () => {
  return (
    <>
      <Section>
        <LoginCard
          type="SignUp"
          submitText="Registrarse"
          redirectText="Iniciar Sesión"
          linkButton="/login"
          apiUrl="/sign-up"
          redirectLink="/login"
        />
      </Section>

      <Footer color={colores.colorSecundario} />
    </>
  );
};

export default SignUp;