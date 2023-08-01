import { HABIGAIL_LOGO, HI_PARTY_LOGO, KALMA_LOGO, LUMEN_LOGO, MULATAS_CAKE_LOGO } from "../../../../assets/img/images";
import ButtonLink from "../../../general/Buttons/contacto/ButtonLink";
import { ClientesBoxSlider, ClientesDiv, ClientesLogo, ClientesSection, ClientesSliderMovil, ClientesSubtitulo, ClientesTitulo, Clientesh3 } from "./ClientesStyled";

const Clientes = () => {
  return (
    <ClientesSection>
      <ClientesDiv>
        <ClientesTitulo>Ellos eligieron cumplir sus sueños...</ClientesTitulo>
        <ClientesSubtitulo>AHORA ES TU TURNO</ClientesSubtitulo>

        <ClientesBoxSlider>
          <ClientesSliderMovil>
            <ClientesLogo src={MULATAS_CAKE_LOGO} alt="Logo Mulatas Cake" />
            <ClientesLogo src={HI_PARTY_LOGO} alt="Logo Hi Party" />
            <ClientesLogo src={KALMA_LOGO} alt="Logo Kalma Digital" />
            <ClientesLogo src={HABIGAIL_LOGO} alt="Logo Habigail" />
            <ClientesLogo src={LUMEN_LOGO} alt="Logo Lumen" />
          </ClientesSliderMovil>
        </ClientesBoxSlider>

        <Clientesh3>¡HAGAMOS EQUIPO!</Clientesh3>
        <ButtonLink enlace="/contacto" texto="¡CONTÁCTANOS!" />
      </ClientesDiv>
    </ClientesSection>
  );
};

export default Clientes;