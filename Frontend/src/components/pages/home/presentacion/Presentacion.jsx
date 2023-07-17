import { PresentacionBoxEstrategia, PresentacionBoxImagenes, PresentacionBoxInspiracion, PresentacionBoxTextos, PresentacionFrase, PresentacionImg1, PresentacionImg2, PresentacionImg3, PresentacionInterrogante, PresentacionParrafoInspiracion, PresentacionRespuesta, PresentacionSection, PresentacionSubtitulo, PresentacionTitulo } from './PresentacionStyled';
import { ESCRITORIO_AISMABA, FUNDADORA_1, FUNDADORA_2 } from '../../../../assets/img/images';

const Presentacion = () => {
  return (
    <PresentacionSection>
      <PresentacionBoxInspiracion>
        <PresentacionBoxTextos>
          <PresentacionTitulo>Creemos en ti...</PresentacionTitulo>
          <PresentacionSubtitulo>CREAMOS POR TI</PresentacionSubtitulo>
          <PresentacionParrafoInspiracion>
            En Aismaba encontraras todos los servicios digitales
            necesarios para <b>impulsar tu negocio al éxito.</b>
            <br />
            <br />
            A través del Diseño Original, Contenido Creativo y
            Estrategias de marketing personalizadas <b>daremos vida</b> a ese proyecto que tanto anhelas.
            <br />
            <br />
            Lograremos transmitir en cada detalle <b>la verdadera escencia</b> y personalidad de tu marca.
          </PresentacionParrafoInspiracion>
          <PresentacionFrase>
            Deja de soñarlo...
            <br />
            ¡estamos aqui para crearlo!
          </PresentacionFrase>

        </PresentacionBoxTextos>

        <PresentacionBoxImagenes>
          <PresentacionImg1 src={FUNDADORA_1} alt='Foto de la creadora de Aismaba' />
          <PresentacionImg2 src={FUNDADORA_2} alt='Foto de la creadora de Aismaba' />
        </PresentacionBoxImagenes>

      </PresentacionBoxInspiracion>

      <PresentacionBoxEstrategia>
        <PresentacionImg3 src={ESCRITORIO_AISMABA} alt='Foto del escritorio de Aismaba' />
        <PresentacionBoxTextos>
          <PresentacionInterrogante>¿COMO LO HAREMOS?</PresentacionInterrogante>
          <PresentacionRespuesta>
            Te brindaremos las herramientas necesarias para que tu emprendimiento sea un éxito en internet.
            <br />
            <br />
            Diseñaremos paso a paso el branding de tu marca logrando que tus clientes puedan identificar cuales son sus valores, su visión y las cualidades que la hacen diferente a las demás.
            <br />
            <br />
            Daremos vida a tus redes sociales ofreciendo contenido innovador, creativo y de calidad que te garantizara los mejores resultados.
            <br />
            <br />
            No dejaremos nada a la suerte! Cada paso sera planificado a traves de nuestras estrategias de marketing para asegurarnos de que se cumplan todos tus objetivos!
          </PresentacionRespuesta>
        </PresentacionBoxTextos>
      </PresentacionBoxEstrategia>
    </PresentacionSection>
  );
};

export default Presentacion;