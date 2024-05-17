import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";
import { coloresV2 } from "../../../assets/css/Colors";
import LoginCard from "../../general/tarjetas/login/LoginCard";
import { handleSignUp } from "../../../helpers/handleSignUp";
import { API_URL } from "../../../env/env";
import Loader from '../../general/Loader/Loader';

const SignUp = () => {
  const [formData, setFormData] = useState({ user_name: "", email: "", country: "", password: ""});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const redirectLink = "/login";
  const apiUrl = (`${API_URL}/sign-up`);

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
            type="SignUp"
            link="/login"
            handleSubmit={(e) => handleSignUp(e, setLoading, setFormData, apiUrl, navigate, redirectLink)}
            formData={formData}
            setFormData={setFormData}
          />
        )}

      </MaxWidth>
    </Section>
  );
};

export default SignUp;

