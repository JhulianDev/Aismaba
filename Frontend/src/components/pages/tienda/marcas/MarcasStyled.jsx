import styled from "styled-components"

export const MarcasSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 60px;
  overflow: hidden;

  @media screen and (max-width: 768px){
    padding: 0 20px;
  }
`

export const MarcasBoxTarjetas = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 60px 0;
  gap: 20px;

  @media screen and (max-width: 1440px){
    max-width: 934px;
  }

  @media screen and (max-width: 1440px){
    margin: 35px 0;
  }
`