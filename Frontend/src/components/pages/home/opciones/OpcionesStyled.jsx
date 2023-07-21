import styled from 'styled-components';
import { colores } from '../../../../assets/css/Colors';

export const OpcionesSection = styled.section`
  background-color: ${colores.colorFondo};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 72px 0;
  gap: 60px;
  overflow: hidden;

  @media screen and (max-width: 1440px){
    padding: 68px 0;
    gap: 56px;
  }

  @media screen and (max-width: 1024px){
    padding: 60px 0;
    gap: 48px;
  }

  @media screen and (max-width: 768px){
    padding: 50px 0;
    gap: 38px;
  }
`

export const OpcionesInterrogante = styled.h2`
  color: ${colores.colorAcento};
  font-family: Cinzel;
  font-size: 28.8px;
  letter-spacing: .25rem;
  text-align: center;

  @media screen and (max-width: 1440px){
    font-size: 25.6px;
  }

  @media screen and (max-width: 1024px){
    font-size: 22.4px;
  }

  @media screen and (max-width: 768px){
    
  }
`