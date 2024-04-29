import styled from "styled-components";
import { coloresV2 } from "../../../../assets/css/Colors";

export const WindowSlider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 768px){
    overflow: visible;
    margin-top: 0px;
  }
` 

export const MovilSlider = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 1232px){
    justify-content: center;
    transition: all .6s ease-in-out;
    transform: ${(props) => 
      props.$cardSelected === 1 ? "translateX(360px)" :
      props.$cardSelected === 2 ? "translateX(0px)": 
      props.$cardSelected === 3 ? "translateX(-360px)" : "translateX(0px)"
    };
  }
`

export const TouchSlider = styled.span`
  width: 100%;
  height: 83%;
  position: absolute;
  top: 0;
  z-index: 2;
`

export const Filter = styled.span`
  display: none;
  width: 280px;
  height: 100%;
  position: absolute;
  left: ${(props) => props.$left && "0"};
  right: ${(props) => props.$right && "0"};
  z-index: 1;

  @media screen and (max-width: 1232px){
    display: flex;
    background: ${(props) => 
    props.$right ? "linear-gradient(90deg, rgba(249,245,244,0) 0%, rgba(249,245,244,1) 100%)" : 
    props.$left ? "linear-gradient(90deg, rgba(249,245,244,1) 0%, rgba(249,245,244,0) 100%)" : "none"};
  }

  @media screen and (max-width: 1024px){
    width: 100px;
  }

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const BoxCircles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;

  @media screen and (max-width: 768px){
    margin-top: 0px;
  }
`

export const Circle = styled.span`
  background-color: #ceb3a5;
  width: 15px;
  aspect-ratio: 1/1;
  border-radius: 100px;
  display: none;

  @media screen and (max-width: 1232px){
    display: flex;
    opacity: ${(props) => props.$selected ? "1" : ".3"};
    transition: all .1s ease-in-out;
  }
`