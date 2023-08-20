import styled from "styled-components"

export const MarcaSectionContenido = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 60px 60px;
  overflow: hidden;

  @media screen and (max-width: 768px){
    padding: 120px 20px 60px;
  }
`

export const MarcaBoxElementos = styled.div`
  max-width: 1200px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2%;

  @media screen and (max-width: 1440px){
    max-width: 934px;
    margin-top: 20px;
  }

  @media screen and (max-width: 768px){
    flex-direction: column;
    margin-top: 0px;
  }
`