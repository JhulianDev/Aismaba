import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";
import { coloresV2 } from "../../../assets/css/Colors";
import Loader from '../../general/Loader/Loader';
import LoginCard from "../../general/tarjetas/login/LoginCard";
import { handleSignIn } from "../../../helpers/handleSignIn";
import useUserStore from "../../../stores/useUserStore";
import { API_URL } from "../../../env/env";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: ""});
  const [loading, setLoading] = useState(false);
  const { setUserData, setUserToken, redirectToCart } = useUserStore();
  const navigate = useNavigate();
  const redirectLink = "/";
  const apiUrl = (`${API_URL}/login`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section $bgColor={coloresV2.colorSecundario}>
      <MaxWidth $justifyContent="center">

        {loading ? (
          <Loader height={"100vh"} />
        ) : (
          <LoginCard
            type="Login"
            link="/sign-up"
            handleSubmit={(e) => handleSignIn(e, setLoading, setFormData, apiUrl, setUserData, setUserToken, navigate, redirectToCart, redirectLink)}
            formData={formData}
            setFormData={setFormData}
          />
        )}

      </MaxWidth>
    </Section>
  );
};

export default Login;