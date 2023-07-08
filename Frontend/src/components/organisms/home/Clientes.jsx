import { Link } from "react-router-dom";
import { HABIGAIL_LOGO, HI_PARTY_LOGO, KALMA_LOGO, LUMEN_LOGO, MULATAS_CAKE_LOGO } from "../../../assets/img/imagenes";
import ContactoButton from "../../molecules/boton/ContactoButton";

const Clientes = () => {
  return (
    <section className="main-container-clientes">
      <div className="clientes">
        <h1 className="clientes__h1">Ellos eligieron cumplir sus sueños...</h1>
        <h2 className="clientes__h2">AHORA ES TU TURNO</h2>

        <div className="clientes__box-slider">
          <div className="clientes__slider">
            <img src={MULATAS_CAKE_LOGO} alt="Logo Mulatas Cake" className="clientes__logo" />
            <img src={HI_PARTY_LOGO} alt="Logo Hi Party" className="clientes__logo" />
            <img src={KALMA_LOGO} alt="Logo kalma Digital" className="clientes__logo" />
            <img src={HABIGAIL_LOGO} alt="Logo Habigail" className="clientes__logo" />
            <img src={LUMEN_LOGO} alt="Logo Lumen" className="clientes__logo" />
          </div>
        </div>

        <h3 className="clientes__h3">¡HAGAMOS EQUIPO!</h3>
        <ContactoButton />
      </div>
    </section>
  );
};

export default Clientes;