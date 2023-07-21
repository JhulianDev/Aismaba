import { FlechaContainer, FlechaSvg } from "./FlechaStyled";

const FlechaSiguiente = ({ handleFlecha }) => {
  return (
    <FlechaContainer>
      <FlechaSvg
        id="flechaSiguiente"
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
        viewBox="0 0 48 48"
        fill="currentcolor"
        onClick={handleFlecha}>
        <path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" />
      </FlechaSvg>
    </FlechaContainer>
  );
};

export default FlechaSiguiente;