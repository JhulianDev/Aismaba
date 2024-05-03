import Lottie from "lottie-react"
import LOTTIE_LOADER from "../../../assets/lotties/loader.json";
import { ContainerLoader } from "./LoaderStyled";

const Loader = ({height, bgColor}) => {
  return (
    <ContainerLoader $height={height} $bgColor={bgColor}>
      <Lottie animationData={LOTTIE_LOADER} />
    </ContainerLoader>
  );
};

export default Loader;