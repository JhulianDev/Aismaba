import styled from "styled-components"
import { colores } from "../../../../assets/css/Colors"

export const DesarrolloSection = styled.section`
  background-color: ${colores.colorTerciario};
  width: 100%;
  height: 100vh;
  padding: 220px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 980px){
    height: auto;
    padding: 60px 0;
  }
`

export const DesarrolloDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;

  @media screen and (max-width: 980px){
    flex-direction: column;
    gap: 50px;
  }
`

export const DesarrolloBoxInfo = styled.div`
  height: 580px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1440px){
    height: 490px;
    width: 480px;
  }

  @media screen and (max-width: 1180px){
    height: 460px;
    width: 390px;
  }

  @media screen and (max-width: 980px){
    width: 540px;
    height: auto;
    gap: 20px;
    justify-content: center;
  }

  @media screen and (max-width: 660px){
    width: 330px;
  }

  @media screen and (max-width: 375px){
    width: 270px;
  }
`

export const DesarrolloTitulo = styled.h1`
  width: 100%;
  font-family: Cinzel;
  font-size: 1.7rem;
  letter-spacing: 1px;
  font-weight: 600;
  text-align: left;
  color: ${colores.colorAcento};

  @media screen and (max-width: 1440px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 980px){
    text-align: center;
    order: ${(props) => (props.$mobileOrder ? props.$mobileOrder : 'initial')};
  }

  @media screen and (max-width: 660px){
    font-size: 1rem;
  }
`

export const DesarrolloParrafo = styled.p`
  font-family: Roboto;
  line-height: 1.3rem;
  letter-spacing: 1px;
  text-align: justify;
  color: ${colores.colorAcento};

  @media screen and (max-width: 980px){
    order: ${(props) => (props.$mobileOrder ? props.$mobileOrder : 'initial')};
  }
`

export const DesarrolloImg = styled.img`
  width: 100%;

  @media screen and (max-width: 980px){
    order: ${(props) => (props.$mobileOrder ? props.$mobileOrder : 'initial')};
  }
`