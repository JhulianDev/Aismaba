import styled, { css } from "styled-components";
import { coloresV2 } from "../css/Colors";

export const Section = styled.section`
  display: flex;
  align-items: ${(props) => props.$align || "center"};
  justify-content: center;

  width: 100%;
  min-height: ${(props) => props.$height || "100vh"};
  padding: 60px;

  background-color: ${(props) => props.$bgColor};
  border: ${(props) => props.$border && `1px solid ${coloresV2.colorTextos}`};
  border-left: none;
  border-right: none;
  overflow: hidden;

  @media screen and (max-width: 768px){
    padding: 60px 30px;
  }

  @media screen and (max-width: 596px){
    padding: 60px 20px;
  }
`

export const MaxWidth = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || "row"};
  align-items: center;
  justify-content: space-between;
  position: relative;

  max-width: 1416px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1535px){
    max-width: 1112px;
  }

  @media screen and (max-width: 1232px){
    max-width: 904px;
  }

  @media screen and (max-width: 1024px){
    max-width: 648px;
  }

  @media screen and (max-width: 768px){
    max-width: 536px;
    flex-direction: column;
    gap: 30px;
  }

  @media screen and (max-width: 596px){
    max-width: 380px;
  }
`