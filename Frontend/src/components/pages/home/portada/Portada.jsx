import { PortadaContainerVideo, PortadaDiv, PortadaLogo, PortadaParrafo, PortadaSection, PortadaSubtitulo, PortadaTituloDesktop, PortadaTituloMovil, PortadaVideo } from './PortadaStyled';
import { ISOTIPO_BLANCO } from '../../../../assets/img/images';
import { SOMBRAS_VIDEO } from '../../../../assets/vid/videos';

const Portada = () => {
  return (
    <>
      <PortadaSection>
        <PortadaDiv>
          <PortadaLogo src={ISOTIPO_BLANCO} alt="Isotipo de Aismaba" />
          <PortadaTituloMovil>AISMABA</PortadaTituloMovil>
          <PortadaTituloDesktop>BIENVENIDOS A AISMABA</PortadaTituloDesktop>
          <PortadaSubtitulo>AGENCIA CREATIVA</PortadaSubtitulo>
          <PortadaParrafo>¡IMPULSAMOS TU MARCA AL SIGUIENTE NIVEL!</PortadaParrafo>
        </PortadaDiv>
      </PortadaSection>

      <PortadaContainerVideo>
        <PortadaVideo src={SOMBRAS_VIDEO} autoPlay loop muted/>
      </PortadaContainerVideo>
    </>
  );
};

export default Portada;