import styled from "styled-components";
import { colores } from "../../../assets/css/Colors";

export const InfoIconoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;

  @media screen and (max-width: 1180px){
    margin: 10px;
  }

  @media screen and (max-width: 980px){
    margin: 20px;
  }

  @media screen and (max-width: 660px){
    flex-direction: column;
  }
`

export const InfoIconoImg = styled.img`
  width: 80px;
  filter: invert(66%) sepia(3%) saturate(4484%) hue-rotate(349deg)
  brightness(100%) contrast(74%);

  @media screen and (max-width: 1440px){
    width: 60px;
  }

  @media screen and (max-width: 1180px){
    width: 45px;
  }

  @media screen and (max-width: 660px){
    width: 100px;
    margin: 0 0 20px 0;
  }
`

export const InfoIconoBoxTextos = styled.div`
  width: 280px;
  margin-left: 20px;

  @media screen and (max-width: 1440px){
    width: 225px;
  }

  @media screen and (max-width: 1180px){
    width: 180px;
  }

  @media screen and (max-width: 660px){
    width: 350px;
    margin: 0;
  }

  @media screen and (max-width: 375px){
    width: 280px;
  }
`

export const InfoIconoH2 = styled.h2`
  font-family: Roboto;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: ${colores.colorPrincipal};

  @media screen and (max-width: 1440px){
    font-size: 1rem;
  }

  @media screen and (max-width: 660px){
    text-align: center;
    font-size: 1.2rem;
  }
`

export const InfoIconoParrafo = styled.p`
  font-family: Roboto;
  line-height: 1.3rem;
  color: ${colores.colorTexto};

  @media screen and (max-width: 660px){
    text-align: center;
    font-size: 1.2rem;
    line-height: 30px;
    margin-bottom: 20px;
  }
  
  @media screen and (max-width: 375px){
    font-size: 1rem;
  }
`
