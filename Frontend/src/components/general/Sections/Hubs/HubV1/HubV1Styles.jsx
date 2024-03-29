import styled from "styled-components";

export const BoxCards = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media screen and (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
    margin-top: -10px;
  }
`