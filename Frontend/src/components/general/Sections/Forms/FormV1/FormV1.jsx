import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MaxWidth, Section } from '../../../../../assets/styles/GeneralStyles';
import { BoxImage, BoxInputs, Button, CardContainer, Description, Form, Image, Input, Title } from './FormV1Styles';
import { coloresV2 } from '../../../../../assets/css/Colors';
import { handleSuscription } from '../../../../../helpers/handleNewsletter';
import Loader from '../../../Loader/Loader';

const FormV1 = ({ data, formRef, file }) => {
  const [formData, setFormData] = useState({ user_name: "", email: "", country: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <Section $bgColor={coloresV2.colorSecundario} ref={formRef}>
      <MaxWidth>
        <CardContainer>
          <BoxImage>
            <Image src={data.image} alt={data.alt} />
          </BoxImage>

          <Form onSubmit={(e) => handleSuscription(e, setLoading, setFormData, file, navigate)} noValidate>
            {loading ? (
              <Loader
                height={"100px"}
                bgColor={false}
              />
            ) : (
              <>
                <Title>{data.title}</Title>
                <Description>{data.description}</Description>
                <BoxInputs>
                  <Input type="text" name="user_name" placeholder="Nombre" value={formData.user_name} onChange={(e) => setFormData({ ...formData, user_name: e.target.value })} />
                  <Input type="text" name="country" placeholder="País" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
                </BoxInputs>
                <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <Button type='submit'>{data.callToAction}</Button>
              </>
            )}
          </Form>
        </CardContainer>
      </MaxWidth>
    </Section>
  );
};

export default FormV1;