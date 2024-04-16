import { useState } from 'react';
import { MaxWidth, Section } from '../../../../../assets/styles/GeneralStyles';
import { BoxImage, BoxInputs, Button, CardContainer, Description, Form, Image, Input, Title } from './FormV1Styles';
import IMAGE_FORM from "../../../../../assets/img/generales/plantillas_gratuitas/image_form.jpg"
import { coloresV2 } from '../../../../../assets/css/Colors';
import { handleSuscription } from '../../../../../helpers/handleNewsletter';
import Loader from '../../../Loader/Loader';

const FormV1 = () => {
  const [formData, setFormData] = useState({ user_name: "", email: "", country: "" });
  const [loading, setLoading] = useState(false);
  return (
    <Section $bgColor={coloresV2.colorSecundario}>
      <MaxWidth>
        <CardContainer>
          <BoxImage>
            <Image src={IMAGE_FORM} alt='MockUp Plantillas' />
          </BoxImage>

          <Form onSubmit={(e) => handleSuscription(e, setLoading, setFormData)} noValidate>
            {loading ? (
              <Loader
                height={"100px"}
                bgColor={false}
              />
            ) : (
              <>
                <Title>Descarga las plantillas</Title>
                <Description>Completa el formulario y recibe tus plantillas gratis!</Description>
                <BoxInputs>
                  <Input type="text" name="user_name" placeholder="Nombre" value={formData.user_name} onChange={(e) => setFormData({ ...formData, user_name: e.target.value })} />
                  <Input type="text" name="country" placeholder="País" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
                </BoxInputs>
                <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <Button type='submit'>Descargar plantillas</Button>
              </>
            )}
          </Form>
        </CardContainer>
      </MaxWidth>
    </Section>
  );
};

export default FormV1;