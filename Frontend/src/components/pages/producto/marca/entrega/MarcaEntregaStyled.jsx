import styled from "styled-components"
import { colores } from "../../../../../assets/css/Colors"

export const MarcasSectionEntrega = styled.section`
  background-color: ${colores.colorSecundario};
  color: ${colores.colorAcento};
  width: 100%;
  padding: 70px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 768px){
    padding: 60px 20px;
  }
`

export const EntregaTitulo = styled.div`
  width: 100%;
  font-family: Titulo;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.3rem;
  line-height: 1.8rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: -10px;

  @media screen and (max-width: 1440px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 425px){
    font-size: 1rem;
    margin-bottom: 0px;
  }
`

export const EntregaBoxPasos = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 60px;

  @media screen and (max-width: 1440px){
    max-width: 934px;
    gap: 40px;
  }

  @media screen and (max-width: 768px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`