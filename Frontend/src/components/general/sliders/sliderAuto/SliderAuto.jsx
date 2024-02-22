import { MainContainer, Slider } from "./SliderAutoStyles";

const SliderAuto = ({ children }) => {
  return (
    <MainContainer>
      <Slider>
        {children}
      </Slider>
    </MainContainer>
  );
};

export default SliderAuto;