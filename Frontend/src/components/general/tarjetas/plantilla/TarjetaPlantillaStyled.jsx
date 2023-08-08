import styled from "styled-components"
import { colores } from "../../../../assets/css/Colors"

export const TarjetaPlantillaBox = styled.div`
  width: 28%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow:  0px 0px 10px 2px rgb(0 0 0 / 25%);

  @media screen and (max-width: 1440px){
    width: 30%;
  }

  @media screen and (max-width: 768px){
    width: 48%;
  }

  @media screen and (max-width: 375px){
    width: 100%;
  }
`

export const TarjetaPlantillaImg = styled.img`
  width: 100%;
  cursor: pointer;
`

export const TarjetaPlantillaBoxInfo = styled.div`
  background-color: ${colores.colorBlanco};
  padding: 15px 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  font-family: Roboto;
`
export const TarjetaPlantillasBoxTextos = styled.div`
  width: 74%;
  white-space: nowrap;
`

export const TarjetaPlantillaTitulo = styled.h1`
  font-family: Cinzel;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.08;
  color: ${colores.colorAcento};
  margin-bottom: 6px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 1024px){
    font-size: 1rem;
  }
`

export const TarjetaPlantillaSubtitulo = styled.h2`
  font-weight: 400;
  font-size: .9rem;
  line-height: .9;
  color: ${colores.colorTexto};

  @media screen and (max-width: 1024px){
    font-size: .8rem;
  }

  @media screen and (max-width: 425px){
    margin-top: -2px;
  }
`

export const TarjetaPlantillaBoxPrecio = styled.div`
  background-color: ${colores.colorAcento};
  color: ${colores.colorBlanco};
  font-size: 1.2rem;
  padding: 5px 10px 4px;
  border-radius: 8px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 425px){
    margin-top: -4px;
  }
`

export const TarjetaPlantillaPrecio = styled.span`
  color: ${colores.colorBlanco};
  font-size: 1rem;

  @media screen and (max-width: 1440px){
    font-size: 1rem;
  }

  @media screen and (max-width: 1024px){
    font-size: .8rem;
  }
`

export const TarjetaPlantillaMoneda = styled.span`
  font-size: .9rem;

  @media screen and (max-width: 1024px){
    font-size: .7rem;
  }
`

export const TarjetaPlantillaBoxButton = styled.div`
  background-color: ${colores.colorBlanco};
  padding: 0 15px 15px;
  display: flex;
  justify-content: end;

  @media screen and (max-width: 425px){
    justify-content: center;
  }
`

export const TarjetaPlantillaButton = styled.button`
  background-color: ${colores.colorAcento};
  color: ${colores.colorBlanco};
  border: solid 2px transparent;
  border-radius: 30px;
  padding: 6px 16px;
  font-size: .95rem;
  font-family: Nunito;
  cursor: pointer;

  &:hover{
    background-color: ${colores.colorBlanco};
    color: ${colores.colorAcento};
    border: solid 2px ${colores.colorAcento};
  }

  @media screen and (max-width: 1440px){
    font-size: .8rem;
  }

  @media screen and (max-width: 1024px){
    font-size: .7rem;
  }
`