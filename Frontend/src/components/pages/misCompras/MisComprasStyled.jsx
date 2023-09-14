import styled from "styled-components"
import { colores } from "../../../assets/css/Colors"

export const Section = styled.section`
  background-color: ${colores.colorFondo};
  color: ${colores.colorAcento};
  width: 100%;
  min-height: 100vh;
  padding: 120px 60px 60px;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 768px){
    padding: 120px 20px 60px;
  }
`

export const BoxCompras = styled.div`
  background-color: #ffffff;
  height: fit-content;
  max-width: 1200px;
  width: 100%;
  padding: 15px 40px 45px;
  border-radius: 8px;
  overflow: hidden;

  box-shadow:
  1.1px 1.1px 2.2px rgba(0, 0, 0, 0.02),
  2.7px 2.7px 5.3px rgba(0, 0, 0, 0.028),
  5px 5px 10px rgba(0, 0, 0, 0.035),
  8.9px 8.9px 17.9px rgba(0, 0, 0, 0.042),
  16.7px 16.7px 33.4px rgba(0, 0, 0, 0.05),
  40px 40px 80px rgba(0, 0, 0, 0.07);
`

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-family: Nunito;
  font-size: 30px;
  font-weight: 700;
`

export const BoxItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 20px 0;
  gap: 25px;
`

export const Product = styled.h1`
  font-family: Nunito;
  font-size: 22px;
  font-weight: 600;
`

export const ColumnProduct = styled.h1`
  font-family: Nunito;
  font-size: 23px;
  font-weight: 700;
`

export const ColumnDownload = styled.h1`
  font-family: Nunito;
  font-size: 23px;
  font-weight: 700;

  @media screen and (max-width: 375px){
    display: none;
  }
`

export const DownloadBox = styled.a`
  display: flex;
  margin-right: 30px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover{
    transform: scale(1.2);
  }
`

export const DownloadIcon = styled.img`
  width: 50px;
  filter: invert(51%) sepia(17%) saturate(1123%) hue-rotate(341deg) brightness(88%) contrast(79%);
`