import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";
import { coloresV2 } from "../../../assets/css/Colors";
import Loader from '../../general/Loader/Loader';
import LoginCard from "../../general/tarjetas/login/LoginCard";
import { handleSignIn } from "../../../helpers/handleSignIn";
import useUserStore from "../../../stores/useUserStore";
import { setToken } from "../../../helpers/token";
import { API_URL } from "../../../env/env";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { setUserData, requireLogin } = useUserStore();
  const navigate = useNavigate();
  const redirectLink = "/";
  const apiUrl = (`${API_URL}/login`);

  return (
    <Section $bgColor={coloresV2.colorSecundario}>
      <MaxWidth $justifyContent="center">

        {loading ? (
          <Loader height={"100vh"} />
        ) : (
          <LoginCard
            type="Login"
            link="/sign-up"
            handleSubmit={(e) => handleSignIn(e, setLoading, apiUrl, setUserData, setToken, navigate, requireLogin, redirectLink)}
          />
        )}

      </MaxWidth>
    </Section>
  );
};

export default Login;