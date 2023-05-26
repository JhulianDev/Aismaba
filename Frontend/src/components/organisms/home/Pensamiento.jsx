import { COMILLAS_GRISES } from '../../../assets/img/imagenes';

const Pensamiento = () => {
  return (
    <section className="main-container-pensamiento">
      <div className="pensamiento">
        <img src={COMILLAS_GRISES} alt="Comillas" className="pensamiento__comillas" />
        <h2 className="pensamiento__h2">
          <i>
            Las grandes ideas tienen
            <br />
            pequeños comienzos.
          </i>
        </h2>
        <h3 className="pensamiento__h3">HOY ES EL MEJOR DIA PARA COMENZAR.</h3>
      </div>
    </section>
  );
};

export default Pensamiento;