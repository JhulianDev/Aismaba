import styled from "styled-components"
import { COWORKING } from "../../../../assets/img/images"

export const RoadMapSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const RoadMapBoxTitulo = styled.div`
  height: 250px;
  width: 100%;
  background-image: url(${COWORKING});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 140px;

  @media screen and (max-width: 425px){
    height: 150px;
  }
`

export const RoadMapTitulo = styled.h1`
  background-color: #e4d9c5d5;
  width: 100%;
  height: 100%;
  font-family: Cinzel;
  font-size: 3rem;
  letter-spacing: 0.2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 768px){
    font-size: 2rem;
  }

  @media screen and (max-width: 425px){
    font-size: 1.6rem;
  }
`

export const RoadMapBoxPasos = styled.div`
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 80px 44px;
  gap: 80px;

  @media screen and (max-width: 1024px){
    padding: 80px 0;
  }


  @media screen and (max-width: 768px){
    padding: 80px 40px;
    flex-direction: column;
  }

  @media screen and (max-width: 425px){
    gap: 60px;
  }
`