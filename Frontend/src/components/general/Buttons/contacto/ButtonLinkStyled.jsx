import styled from "styled-components"
import { Link } from "react-router-dom";
import { colores } from "../../../../assets/css/Colors";

export const LinkButton = styled(Link)`
  background-color: ${colores.colorPrincipal};
  color: ${colores.colorBlanco};
  box-shadow: 0rem 0rem .3125rem .125rem #0000002a;
  background-color: ${colores.colorPrincipal};
  padding: 19.2px 32px;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Cinzel;
  font-size: 13px;
  letter-spacing: 3.2px;

  transition: 0.3s;

  &:hover{
    background-color: ${colores.colorBlanco};
    color: ${colores.colorPrincipal};
  }

  &:active{
    background-color: ${colores.colorPrincipal};
    color: ${colores.colorBlanco};
  }

  @media screen and (max-width: 768px){
    font-size: 15px;
  }
`