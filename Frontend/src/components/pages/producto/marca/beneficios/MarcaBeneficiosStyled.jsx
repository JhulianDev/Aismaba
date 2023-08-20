import styled from "styled-components"
import { colores } from "../../../../../assets/css/Colors"

export const MarcaSectionBeneficios = styled.section`
  color: ${colores.colorAcento};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px 60px 60px;
  gap: 30px;
  overflow: hidden;

  @media screen and (max-width: 1440px){
    padding: 60px 60px 50px;
  }

  @media screen and (max-width: 768px){
    padding: 60px 20px;
  }
`

export const BeneficiosBoxItems = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: top;
  justify-content: space-between;
  margin-top: 20px;

  @media screen and (max-width: 1440px){
    max-width: 934px;
    margin-top: 10px;
  }

  @media screen and (max-width: 768px){
    flex-direction: column;
    gap: 40px;
  }
`