import { FlechaContainer, FlechaSvg } from "./FlechaStyled";

const FlechaAnterior = ({ handleFlecha }) => {
  return (
    <FlechaContainer>
      <FlechaSvg 
      xmlns="http://www.w3.org/2000/svg" 
      height="48" 
      width="48" 
      viewBox="0 0 48 48" 
      fill="currentcolor"
      onClick={handleFlecha}>
        <path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"/>
      </FlechaSvg>
    </FlechaContainer>
  );
};

export default FlechaAnterior;