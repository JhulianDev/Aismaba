import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";
import { coloresV2 } from "../../../assets/css/Colors";
import LoginCard from "../../general/tarjetas/login/LoginCard";

const SignUp = () => {
  return (
    <Section $bgColor={coloresV2.colorSecundario}>
      <MaxWidth $justifyContent="center">

        <LoginCard
          type="SignUp"
          submitText="Registrarse"
          redirectText="Iniciar Sesión"
          linkButton="/login"
          apiUrl="/sign-up"
          redirectLink="/login"
        />

      </MaxWidth>
    </Section>
  );
};

export default SignUp;