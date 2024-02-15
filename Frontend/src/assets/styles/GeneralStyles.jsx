import styled, { css } from "styled-components";

export const Section = styled.section`
  background-color: ${(props) => props.$bgColor};
  min-height: ${(props) => props.$height || "100vh"};
  padding: 60px;
  width: 100%;
  display: flex;
  align-items: ${(props) => props.$align || "center"};
  overflow: hidden;
`

export const MaxWidth = styled.div`
  max-width: 1500px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => props.$column ? "column" : "row"};
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px){
    flex-direction: column;
    gap: 40px;
  }
`