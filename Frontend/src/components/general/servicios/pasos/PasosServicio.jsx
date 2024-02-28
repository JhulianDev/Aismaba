import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { BoxSteps, Subtitle, Title } from "./PasosServicioStyles";
import CardStep from "../../cards/cardStep/CardStep";

const PasosServicio = ({ title, subtitle, steps }) => {
  return (
    <Section $borderBottom>
      <MaxWidth $flexDirection="column">

        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>

        <BoxSteps>
          {steps.map((step) => (
            <CardStep
              key={step.id}
              position={step.position}
              number={step.number}
              image={step.image}
              alt={step.alt}
              title={step.title}
              description={step.description}
              bgColor={step.bgColor}
              border={step.border}
            />
          ))}
        </BoxSteps>

      </MaxWidth>
    </Section>
  );
};

export default PasosServicio;