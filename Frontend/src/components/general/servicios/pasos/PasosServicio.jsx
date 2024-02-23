import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import CardStep from "../../cards/cardStep/CardStep";
import { BoxSteps, Subtitle, Title } from "./PasosServicioStyles";
import STEP_01 from "../../../../assets/img/generales/Step-01.webp";
import STEP_02 from "../../../../assets/img/generales/Step-02.webp";
import STEP_03 from "../../../../assets/img/generales/Step-03.webp";

const PasosServicio = () => {
  return (
    <Section $borderBottom>
      <MaxWidth $flexDirection="column">
        <Title>¿Como lo haremos?</Title>
        <Subtitle>¡En 3 simples pasos!</Subtitle>

        <BoxSteps>

          <CardStep
            position="left"
            number="01"
            image={STEP_01}
            alt="Joven en reunion de trabajo"
            title="Reunion Inicial"
            description="Programaremos una reunion en la que resolveremos todas tus dudas y planearemos juntos el contenido y la estructura que tendra tu sitio web"
            bgColor="#d9cdbf"
            border="true"
          />

          <CardStep
            position="right"
            number="02"
            image={STEP_02}
            alt="Mockup Propuestas Web"
            title="Presentacion de propuesta"
            description="Presentaremos una propuesta del sitio web donde plasmaremos todas las solicitudes y requerimientos acordados en la reunión inicial"
            bgColor="#b69f89"
            border="true"
          />

          <CardStep
            position="left"
            number="03"
            image={STEP_03}
            alt="Mockup Entrega Web"
            title="Entrega Final"
            description="Una vez realizadas las correcciones correspondientes y estes conforme con el resultado, te haremos entrega del sitio web desplegado y en funcionamiento."
            bgColor="#b49483"
            border="true"
          />

        </BoxSteps>
      </MaxWidth>
    </Section>
  );
};

export default PasosServicio;