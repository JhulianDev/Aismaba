import { CabeceraBoxVideo, CabeceraContainer, CabeceraTitulo, CabeceraVideo } from "./CabeceraStyled";

const Cabecera = ({ video, titulo }) => {
  return (
    <CabeceraContainer>
      <CabeceraBoxVideo>
        <CabeceraVideo src={ video } autoPlay loop muted/>
      </CabeceraBoxVideo>
      <CabeceraTitulo>{ titulo }</CabeceraTitulo>
    </CabeceraContainer>
  );
};

export default Cabecera;