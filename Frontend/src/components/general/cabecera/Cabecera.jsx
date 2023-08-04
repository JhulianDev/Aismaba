import { CabeceraBoxTextos, CabeceraBoxVideo, CabeceraMainContainer, CabeceraParrafo, CabeceraTituloM, CabeceraTituloS, CabeceraVideo } from "./CabeceraStyled";

const Cabecera = ({ imagen, video, tituloS, tituloM, parrafo }) => {
  return (
    <>
      <CabeceraMainContainer $imagen={imagen || null}>
        {video ?
          <CabeceraBoxVideo>
            <CabeceraVideo src={video} autoPlay loop muted />
          </CabeceraBoxVideo>
          : null}

        <CabeceraBoxTextos>
          {tituloS ? <CabeceraTituloS>{tituloS}</CabeceraTituloS> : null}
          {tituloM ? <CabeceraTituloM>{tituloM}</CabeceraTituloM> : null}
        </CabeceraBoxTextos>
      </CabeceraMainContainer>

      {parrafo ? <CabeceraParrafo>{parrafo}</CabeceraParrafo> : null}
    </>
  );
};

export default Cabecera;