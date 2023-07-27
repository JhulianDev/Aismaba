import { InfoIconoBox, InfoIconoBoxTextos, InfoIconoH2, InfoIconoImg, InfoIconoParrafo } from "./InfoIconoStyled";

const InfoIcono = ({ imagen, titulo, parrafo }) => {
  return (
    <InfoIconoBox>
      <InfoIconoImg src={ imagen } />
      <InfoIconoBoxTextos>
        <InfoIconoH2>{ titulo }</InfoIconoH2>
        <InfoIconoParrafo>{ parrafo }</InfoIconoParrafo>
      </InfoIconoBoxTextos>
    </InfoIconoBox>
  );
};

export default InfoIcono;