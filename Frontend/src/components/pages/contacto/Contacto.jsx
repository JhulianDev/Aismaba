import { useEffect } from "react";
import { colores } from "../../../assets/css/Colors";
import { ILUSTRACION_CONTACTO } from "../../../assets/img/images";
import Footer from "../../general/footer/Footer";
import { ContactoBox, ContactoBoxFormulario, ContactoButton, ContactoFormulario, ContactoImg, ContactoInput, ContactoParrafo, ContactoSection, ContactoTextArea, ContactoTitulo } from "./ContactoStyled";

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ContactoSection>
        <ContactoBox>
          <ContactoImg src={ILUSTRACION_CONTACTO} alt="Ilustracion Contactanos" />
          <ContactoBoxFormulario>
            <ContactoTitulo>Contáctanos</ContactoTitulo>
            <ContactoParrafo>
              Si tienes ganas de conocer más detalles sobre nuestros servicios, deseas presentar una propuesta o aclarar alguna duda, puedes llenar este formulario y nos pondremos en contacto contigo!
            </ContactoParrafo>

            <ContactoFormulario method="POST">
              <ContactoInput type="text" name="nombre" placeholder="¿Cuál es tu nombre?" />
              <ContactoInput type="email" name="email" placeholder="¿A que e-mail podemos contactarte?" />
              <ContactoInput type="text" name="pais" placeholder="¿Desde que País nos escribes?" />
              <ContactoTextArea name="mensaje" placeholder="Déjanos tu mensaje..." />
              <ContactoButton>Enviar</ContactoButton>
            </ContactoFormulario>
          </ContactoBoxFormulario>
        </ContactoBox>
      </ContactoSection>

      <Footer color={colores.colorPrincipal} />
    </>
  );
};

export default Contacto;