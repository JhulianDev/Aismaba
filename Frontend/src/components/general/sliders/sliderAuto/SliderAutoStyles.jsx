import styled, { keyframes } from "styled-components";

const sliderAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  11.1% {
    transform: translateX(0);
  }
  22.2% {
    transform: translateX(calc(-100% - 20px));
  }
  33.3% {
    transform: translateX(calc(-100% - 20px));
  }
  44.4% {
    transform: translateX(calc(-200% - 40px));
  }
  55.5% {
    transform: translateX(calc(-200% - 40px));
  }
  66.6% {
    transform: translateX(calc(-300% - 60px));
  }
  77.7% {
    transform: translateX(calc(-300% - 60px));
  }
  88.8% {
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
    animation: ${sliderAnimation} 15s infinite alternate ease-in-out;
  }
`