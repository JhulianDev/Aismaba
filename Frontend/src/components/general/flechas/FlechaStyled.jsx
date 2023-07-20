import styled, { css } from 'styled-components';
import { colores } from '../../../assets/css/Colors';

export const FlechaContainer = styled.div`
  width: 3.4375rem;
  height: 3.4375rem;
  align-items: center;
  justify-content: center;
  display: none;

  @media screen and (max-width: 768px){
    display: flex;
  }

  @media screen and (max-width: 410px){
    display: none;
  }
`

export const FlechaSvg = styled.svg`
  display: flex;
  cursor: pointer;
  color: ${colores.colorPrincipal};
  opacity: 0.5;
  transition: 0.2s ease;

  &:hover {
    opacity: 1;
    width: 3.4375rem;
    height: 3.4375rem;
  }
`