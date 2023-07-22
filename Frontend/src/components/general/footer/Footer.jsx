import { INSTAGRAM_LOGO } from "../../../assets/img/images";
import { FooterBoxLegales, FooterContainer, FooterCopyRight, FooterDiv, FooterLinkInstagram, FooterLinkLegales, FooterLogoInstagram } from "./FooterStyled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterDiv>
        <FooterLinkInstagram to="https://www.instagram.com/aismaba/" target="_blank">
          <FooterLogoInstagram src={INSTAGRAM_LOGO} alt="Logo Instagram" />
        </FooterLinkInstagram>
        <FooterCopyRight>Copyright © 2021 Aismaba - Todos los derechos reservados.</FooterCopyRight>
        <FooterBoxLegales>
          <FooterLinkLegales>Políticas de Privacidad</FooterLinkLegales>
          <FooterLinkLegales>Términos y Condiciones</FooterLinkLegales>
          <FooterLinkLegales>Políticas de Cookies</FooterLinkLegales>
        </FooterBoxLegales>
      </FooterDiv>
    </FooterContainer>
  );
};

export default Footer;