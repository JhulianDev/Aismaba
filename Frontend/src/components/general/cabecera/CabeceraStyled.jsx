import styled from "styled-components"

export const CabeceraContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;

  @media screen and (max-width: 1440px){
    height: 300px;
  }

  @media screen and (max-width: 768px){
    height: 210px;
  }

  @media screen and (max-width: 375px){
    height: 180px;
  }
`

export const CabeceraBoxVideo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const CabeceraVideo = styled.video`
  width: 100%;
`

export const CabeceraTitulo = styled.h1`
  background-color: #dfcbcbcc;
  width: 100%;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  color: white;
  font-family: Cinzel;
  font-size: 4rem;
  letter-spacing: 1rem;

  text-align: center;

  padding: 0 40px;

  @media screen and (max-width: 1440px){
    height: 300px;
    font-size: 3.5rem;
  }

  @media screen and (max-width: 1180px){
    font-size: 3rem;
  }

  @media screen and (max-width: 768px){
    height: 210px;
    font-size: 2.3rem;
  }

  @media screen and (max-width: 425px){
    height: 210px;
    font-size: 1.8rem;
  }

  @media screen and (max-width: 375px){
    height: 180px;
    font-size: 1.6rem;
  }
`