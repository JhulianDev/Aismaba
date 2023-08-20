import { LOTTIE_BENEFICIO_1, LOTTIE_BENEFICIO_2, LOTTIE_BENEFICIO_3 } from "../../../../../assets/lotties/lotties";
import Beneficio from "../../../../general/Beneficio/Beneficio";
import Terminos from "../../../../general/terminos/Terminos";
import { EntregaTitulo } from "../entrega/MarcaEntregaStyled";
import { BeneficiosBoxItems, MarcaSectionBeneficios } from "./MarcaBeneficiosStyled";

const MarcaBeneficios = () => {
  return (
    <MarcaSectionBeneficios>
      <EntregaTitulo>¿Por qué elegir una marca pre diseñada?</EntregaTitulo>
      <BeneficiosBoxItems>

        <Beneficio
          lottie={LOTTIE_BENEFICIO_1}
          descripcion="Podrás iniciar tu proyecto desde un punto de partida avanzado, lo que te permitirá enfocar tu energía en lograr los objetivos y metas de tu negocio, sin tener que preocuparte por diseñar desde cero toda la imagen de tu marca."
        />

        <Beneficio
          lottie={LOTTIE_BENEFICIO_2}
          descripcion="Te ahorramos el tiempo y esfuerzo que lleva el proceso creativo de una identidad visual. Tendrás la certeza de que tu marca fue creada por un diseñador cualificado que se tomo el tiempo necesario para cubrir cada detalle."
        />

        <Beneficio
          lottie={LOTTIE_BENEFICIO_3}
          descripcion="Nuestras identidades están diseñadas para transmitir Experiencia, Profesionalismo, Frescura y Originalidad las cuales son bases fundamentales para atraer a esos nuevos clientes que todo proyecto necesita en sus inicios."
        />

      </BeneficiosBoxItems>

      <Terminos />
      
    </MarcaSectionBeneficios>
  );
};

export default MarcaBeneficios;