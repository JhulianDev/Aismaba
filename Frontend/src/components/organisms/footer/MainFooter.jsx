import { INSTAGRAM_LOGO } from "../../../assets/img/imagenes";

const MainFooter = ({ color }) => {
  return (
    <footer className="main-container-footer" style={{ backgroundColor: color }}>
      <div className="footer">
        <a href="https://www.instagram.com/aismaba/" className="footer__link-instagram">
          <img src={INSTAGRAM_LOGO} alt="Logo Instagram" className="footer__logo-instagram" />
        </a>
        <h2 className="footer__copyright">Copyright © 2021 Aismaba - Todos los derechos reservados.</h2>
        <div className="footer__box-politicas-y-terminos">
          <h3 className="footer__politicas-y-terminos">Políticas de Privacidad</h3>
          <h3 className="footer__politicas-y-terminos">Términos y Condiciones</h3>
          <h3 className="footer__politicas-y-terminos">Políticas de Cookies</h3>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;