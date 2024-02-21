import { coloresV2 } from "../../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import CardBeneficio from "../../cards/cardBeneficio/CardBeneficio";
import ICONO_DOMINIO from "../../../../assets/img/generales/Icono-Dominio.svg"
import ICONO_HOSTING from "../../../../assets/img/generales/Icono-Hosting.svg"
import ICONO_RESPONSIVE from "../../../../assets/img/generales/Icono-Responsive.svg"

const BeneficiosServicios = () => {
  return (
    <Section $border $height="100px" $bgColor={coloresV2.colorPrincipal}>
      <MaxWidth>

        <CardBeneficio
          icon={ICONO_DOMINIO}
          title="Dominio Gratis"
          description="De regalo por un año"
        />

        <CardBeneficio
          icon={ICONO_HOSTING}
          title="Hosting Gratis"
          description="De regalo por un año"
        />

        <CardBeneficio
          icon={ICONO_RESPONSIVE}
          title="Diseño Adaptable"
          description="A todos los dispositivos"
        />

      </MaxWidth>
    </Section>
  );
};

export default BeneficiosServicios;