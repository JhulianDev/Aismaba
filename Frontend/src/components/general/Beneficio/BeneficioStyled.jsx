import styled from "styled-components"
import Lottie from "lottie-react"

export const BeneficioBox = styled.div`
  width: 30%;

  @media screen and (max-width: 768px){
    width: 100%;
  }
`

export const BeneficioCustomLottie = styled(Lottie)`
  height: 270px;

  @media screen and (max-width: 1440px){
    height: 200px;
  }
`

export const BeneficioDescripcion = styled.p`
  font-family: Roboto;
  line-height: 1.6rem;
  text-align: justify;

  @media screen and (max-width: 768px){
    width: 100%;
    margin-top: 15px;
  }
`