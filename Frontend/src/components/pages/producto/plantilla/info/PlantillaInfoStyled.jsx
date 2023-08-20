import styled from "styled-components"

export const PlantillaBoxInfo = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  @media screen and (max-width: 1440px){
    max-width: 934px;
  }
`

export const PlantillaInfoTitulo = styled.h1`
  font-family: Cinzel;
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
  
  @media screen and (max-width: 1440px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.2rem;
  }
`

export const PlantillaInfoParrafo = styled.p`
  font-family: Roboto;
  font-size: 1rem;
  line-height: 1.6rem;
  text-align: justify;

  @media screen and (max-width: 425px){
    font-size: 1.1rem;
  }
`