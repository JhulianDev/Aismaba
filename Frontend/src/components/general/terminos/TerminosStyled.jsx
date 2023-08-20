import styled from "styled-components"
import { colores } from "../../../assets/css/Colors"

export const PlantillaTerminos = styled.p`
  background-color: ${colores.colorTerciario};
  max-width: 1200px;
  font-family: Roboto;
  font-size: 1rem;
  line-height: 1.4rem;
  text-align: center;
  padding: 20px 200px;
  margin-top: 10px;
  border: double 4px ${colores.colorAcento};

  @media screen and (max-width: 1440px){
    max-width: 934px;
    padding: 20px 100px;
  }

  @media screen and (max-width: 768px){
    padding: 20px 40px;
  }
`