import styled, { keyframes } from "styled-components";

const sliderAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  6% {
    transform: translateX(0);
  }
  18.5% {
    transform: translateX(calc(-100% - 20px));
  }
  31% {
    transform: translateX(calc(-100% - 20px));
  }
  43.5% {
    transform: translateX(calc(-200% - 40px));
  }
  56% {
    transform: translateX(calc(-200% - 40px));
  }
  68.5% {
    transform: translateX(calc(-300% - 60px));
  }
  81% {
    transform: translateX(calc(-300% - 60px));
  }
  93.5% {
    transform: translateX(calc(-400% - 80px));
  }
  100% {
    transform: translateX(calc(-400% - 80px));
  }
`

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  margin-top: 40px;

  @media screen and (max-width: 768px){
    margin-top: 10px;
  }
`

export const Slider = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 768px){
    flex-wrap: nowrap;
    animation: ${sliderAnimation} 9s infinite alternate ease-in-out;
  }
`