import styled from "styled-components";
import { coloresV2 } from "../../../assets/css/Colors";
import { fonts } from "../../../assets/fonts/FontsHandler";

export const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  background-color: ${coloresV2.colorPrincipal};
  width: 100%;
  height: fit -content;
  border-radius: 8px;
  margin-top: 60px;
  border: 1px solid ${coloresV2.colorTextos};
  font-family: ${fonts.SecondaryTypography};
  color: ${coloresV2.colorTextos};
  overflow-x: auto;
  position: relative;

  /* Agrega borde superior a todos los hijos menos al primero */
  > *:not(:first-child) {
    border-top: 1px solid ${coloresV2.colorTextos};
  }

  /* Estilos del scrollbar personalizado */
  &::-webkit-scrollbar {
    height: 9px;
  }

  &::-webkit-scrollbar-track {
    background-color: #30303050;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #303030b7;
    border-radius: 8px;
    cursor: pointer;
  }
`

export const TableName = styled.h1`
  width: 100%;
  font-family: ${fonts.MainTypography};
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 25px;
  grid-column: 1 / 6;

  @media screen and (max-width: 768px){
    text-align: start;
    padding: 25px 15px;
  }
`

export const ColumnName = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 20px 10px;
  border-right: ${(props) => props.$borderNone ? "none" : `1px solid ${coloresV2.colorTextos}`};
`

export const Item = styled.span`
  font-size: 1rem;
  padding: 20px 10px;
  border-right: ${(props) => props.$borderNone ? "none" : `1px solid ${coloresV2.colorTextos}`};
`