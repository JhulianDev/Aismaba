import styled, { css } from "styled-components"
import { colores } from "../../../../assets/css/Colors"

const imgStyles = css`
  border-radius: .625rem;
  border: solid .125rem ${colores.colorPrincipal};
  box-shadow: .9375rem .9375rem 1.25rem #00000021;
`

export const PresentacionSection = styled.section`
  background-color: ${colores.colorFondo};
  width: 100%;
  min-height: 100vh;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  gap: 2.5rem;

  @media screen and (max-width: 1024px){
    padding: 3.125rem;
  }
`

export const PresentacionBoxInspiracion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.125rem;

  @media screen and (max-width: 807px){
    gap: 1.25rem;
  }

  @media screen and (max-width: 620px){
    flex-direction: column;
  }
`

export const PresentacionBoxTextos = styled.div`
  color: ${colores.colorAcento};
`

export const PresentacionTitulo = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 1.4rem;
  font-style: italic;

  @media screen and (max-width: 1440px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 620px){
    text-align: center;
  }
`

export const PresentacionSubtitulo = styled.h2`
  font-family: Cinzel;
  font-weight: bold;
  font-size: 1.4rem;
  letter-spacing: .375rem;
  margin-bottom: .8rem;

  @media screen and (max-width: 1440px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 620px){
    text-align: center;
  }
`

export const PresentacionParrafoInspiracion = styled.p`
  max-width: 25rem;
  font-family: Roboto;
  font-size: 1rem;
  line-height: 1.3rem;
  text-align: justify;
  margin-bottom: .8rem;

  @media screen and (max-width: 916px){
    max-width: 32.5rem;
  }

  @media screen and (max-width: 807px){
    max-width: 25rem;
  }
`

export const PresentacionFrase = styled.p`
  font-family: Roboto;
  text-align: end;
  font-style: italic;
  font-weight: bold;

  @media screen and (max-width: 1440px){
    font-size: 1rem;
  }

  @media screen and (max-width: 620px){
    text-align: center;
  }
`

export const PresentacionBoxImagenes = styled.div`
  display: flex;
  gap: 3.125rem;

  @media screen and (max-width: 1024px){
    gap: 1.25rem;
  }
`

export const PresentacionImg1 = styled.img`
  ${imgStyles};
  width: 18.75rem;
  height: 25rem;

  @media screen and (max-width: 1440px){
    width: 15rem;
    height: 20.625rem;
  }

  @media screen and (max-width: 620px){
    width: 16.875rem;
    height: 22.5rem;
    margin-top: .625rem;
  }

  @media screen and (max-width: 375px){
    width: 12.5rem;
    height: 18.125rem;
  }
`

export const PresentacionImg2 = styled.img`
  ${imgStyles};
  width: 18.75rem;
  height: 31.25rem;

  @media screen and (max-width: 1440px){
    width: 15.625rem;
    height: 26.875rem;
  }

  @media screen and (max-width: 916px){
    display: none;
  }
`

export const PresentacionImg3 = styled.img`
  ${imgStyles};
  width: 18.75rem;
  margin-bottom: -2.4rem;

  @media screen and (max-width: 1440px){
    width: 17.5rem;
  }

  @media screen and (max-width: 807px){
    margin: 0;
  }

  @media screen and (max-width: 620px){
    order: 2;
  }

  @media screen and (max-width: 375px){
    width: 12.5rem;
  }
`

export const PresentacionBoxEstrategia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.25rem;

  @media screen and (max-width: 1440px){
    gap: 1.875rem;
  }

  @media screen and (max-width: 807px){
    flex-direction: column;
  }
`

export const PresentacionInterrogante = styled.h1`
  font-family: Cinzel;
  font-size: 1.5rem;
  letter-spacing: .375rem;
  font-weight: 800;
  text-align: end;
  margin-bottom: 1rem;

  @media screen and (max-width: 1440px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 807px){
    text-align: center;
  }
`

export const PresentacionRespuesta = styled.p`
  max-width: 42.4375rem;
  font-family: Roboto;
  font-size: 1rem;
  line-height: 1.3rem;
  text-align: justify;

  @media screen and (max-width: 620px){
    max-width: 25rem;
  }
`