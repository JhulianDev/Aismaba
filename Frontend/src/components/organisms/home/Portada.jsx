import { ISOTIPO_BLANCO } from '../../../assets/img/imagenes';
import { SOMBRAS_VIDEO } from '../../../assets/vid/videos';

const Portada = () => {
  return (
    <>
      <div className="main-container-portada">
        <div className="portada">
          <img src={ISOTIPO_BLANCO} alt="Isotipo de Aismaba" className="portada__logo" />
          <h1 className="portada__aismaba">AISMABA</h1>
          <h1 className="portada__bienvenida">BIENVENIDOS A AISMABA</h1>
          <h2 className="portada__agencia">AGENCIA CREATIVA</h2>
          <h3 className="portada__frase">¡IMPULSAMOS TU MARCA AL SIGUIENTE NIVEL!</h3>
        </div>
      </div>

      <div className="portada__container-sombras">
        <video src={SOMBRAS_VIDEO} className="portada__sombras" autoPlay loop muted></video>
      </div>
    </>
  );
};

export default Portada;