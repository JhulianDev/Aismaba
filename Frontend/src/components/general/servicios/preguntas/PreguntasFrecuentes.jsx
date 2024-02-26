import { ShopContext } from "../../../../context/ShopContext";
import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { Answer, ArrowIcon, BoxHeader, BoxItem, MainContainer, MinimizeIcon, Question, Title } from "./PreguntasFrecuentesStyles";
import ARROW_ICON from "../../../../assets/img/generales/arrow_icon.svg"
import MINIMIZE_ICON from "../../../../assets/img/generales/minimize_icon.svg"
import { coloresV2 } from "../../../../assets/css/Colors";
import { useContext, useState } from "react";

const PreguntasFrecuentes = () => {
  const { instakit } = useContext(ShopContext)
  const [itemOpen, setItemOpen] = useState(null); // Estado inicial null para no tener ningún elemento abierto por defecto

  const handleAcordion = (id) => { // La función recibe el índice del elemento que se quiere abrir/cerrar
    if (itemOpen === id) { // Si el elemento clickeado es el mismo que el que está abierto, lo cerramos
      setItemOpen(null);
    } else { // Si es diferente, abrimos el elemento clickeado
      setItemOpen(id);
    }
  }

  return (
    <Section $borderBottom $height="100px" $bgColor={coloresV2.colorSecundario}>
      <MaxWidth>
        <MainContainer>
          <Title>Preguntas Frecuentes:</Title>

          {instakit.faqs.map((faq) => (
            <BoxItem key={faq.id}>

              <BoxHeader $open={itemOpen === faq.id} onClick={() => handleAcordion(faq.id)}>
                <Question>{faq.pregunta}</Question>
                <ArrowIcon $open={itemOpen === faq.id} src={ARROW_ICON} alt="Arrow Icon" />
                <MinimizeIcon $open={itemOpen === faq.id} src={MINIMIZE_ICON} alt="Minimize Icon" />
              </BoxHeader>

              <Answer $open={itemOpen === faq.id}>{faq.respuesta}</Answer>

            </BoxItem>
          ))}

        </MainContainer>
      </MaxWidth>
    </Section>
  );
};

export default PreguntasFrecuentes;