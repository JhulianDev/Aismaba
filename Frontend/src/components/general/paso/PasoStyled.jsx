import styled from "styled-components"

export const BoxPaso = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px){
    width: 100%;
  }
`

export const PasoNumero = styled.span`
  width: 100%;
  font-family: Titulo;
  font-size: 3rem;
  letter-spacing: .4rem;
  text-align: center;
`

export const PasoDescripcion = styled.p`
  font-family: Roboto;
  font-size: 1rem;
  line-height: 1.6rem;
  text-align: justify;
`