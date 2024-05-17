import { coloresV2 } from "../../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import CardBeneficio from "../../cards/cardBeneficio/CardBeneficio";

const BeneficiosServicios = ({ bgColor, color, benefits }) => {
  return (
    <Section $borderBottom $height="100px" $bgColor={bgColor || coloresV2.colorPrincipal}>
      <MaxWidth>

        {benefits.map((benefit) => (
          <CardBeneficio
            key={benefit.id}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            color={color}
          />
        ))}

      </MaxWidth>
    </Section>
  );
};

export default BeneficiosServicios;