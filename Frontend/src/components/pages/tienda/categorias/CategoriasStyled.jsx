import styled from "styled-components"

export const CategoriasSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 60px 60px;

  @media screen and (max-width: 768px){
    padding: 0 20px 40px;
  }
`

export const CategoriasBoxTarjetas = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1440px){
    max-width: 934px;
  }
`