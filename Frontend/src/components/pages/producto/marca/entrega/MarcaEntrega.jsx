import Paso from "../../../../general/paso/Paso";
import { EntregaBoxPasos, EntregaTitulo, MarcasSectionEntrega } from "./MarcaEntregaStyled";

const MarcaEntrega = () => {
  return (
    <MarcasSectionEntrega>
      <EntregaBoxPasos>

        <EntregaTitulo>PROCESO DE ENTREGA</EntregaTitulo>

        <Paso
          numero="01"
          descripcion="Una vez realizada la compra, se iniciara la descarga de una guía de instrucciones con un link de contacto donde podrás indicarnos las personalizaciones que deseas realizarle a la marca. (Datos, Colores, Nombre)"
        />
        <Paso
          numero="02"
          descripcion="Con la información que nos proporciones procederemos a personalizar la identidad agregando los datos correspondientes a la tarjeta personal, cambio de paleta de colores y cambios en el nombre del logo."
        />
        <Paso
          numero="03"
          descripcion="Fijaremos una fecha de revisión en la cual te mostraremos el resultado final según las personalizaciones pactadas y realizaremos los ajustes correspondientes hasta obtener el resultado deseado."
        />
        <Paso
          numero="04"
          descripcion="Una vez nos des tu aprobación final, prepararemos todos los archivos personalizados de tu nueva marca y recibirás la entrega final vía mail en los formatos correspondientes: JPG, PNG, AI."
        />

      </EntregaBoxPasos>
    </MarcasSectionEntrega>
  );
};

export default MarcaEntrega;