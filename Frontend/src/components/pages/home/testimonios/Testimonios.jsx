import { HABIGAIL_LOGO_TESTIMONIO, LUMEN_LOGO_TESTIMONIO, MISSNANA_LOGO_TESTIMONIO, MULATAS_CAKE_LOGO_TESTIMONIO } from "../../../../assets/img/images";
import TarjetaTestimonio from "../../../general/tarjetas/testimonios/TarjetaTestimonio";
import { TestimoniosBoxTarjetas, TestimoniosDiv, TestimoniosFrase, TestimoniosSection, TestimoniosTitulo } from "./TestimoniosStyled";

const Testimonios = () => {
  return (
    <TestimoniosSection>
      <TestimoniosDiv>
        <TestimoniosTitulo>Testimonios Que</TestimoniosTitulo>
        <TestimoniosFrase>NOS HACEN FELICES</TestimoniosFrase>
        <TestimoniosBoxTarjetas>

          <TarjetaTestimonio
            logo={MULATAS_CAKE_LOGO_TESTIMONIO}
            alt="Logo Mulatas Cake"
            marca="MULATAS CAKE"
            rubro="Pasteleria"
            parrafo="”Fue la mejor decisión el haber contratado sus servicios de Branding. Al principio estaba nerviosa porque no tenia una idea clara de que imagen quería para mi proyecto, pero fueron muy atentos a mis inquietudes y lograron guiarme hasta obtener un resultado que me dejo Enamorada de mi marca.”"
          />

          <TarjetaTestimonio
            logo={MISSNANA_LOGO_TESTIMONIO}
            alt="Logo Miss Nana"
            marca="MISS NANA"
            rubro="Accesorios Femeninos"
            parrafo="”En Aismaba han hecho un trabajo maravilloso al rediseñar la imagen de nuestra marca y llevarla de algo simple y funcional a algo increíblemente profesional. Recomendamos Aismaba a cualquier negocio que necesite ayuda para Mejorar o Crear el Branding de su marca desde 0”"
          />

          <TarjetaTestimonio
            logo={HABIGAIL_LOGO_TESTIMONIO}
            alt="Logo Mulatas Cake"
            marca="HABIGAIL"
            rubro="Indumentaria Femenina"
            parrafo="”Tenemos una excelente relacion comercial con Aismaba. En el pasado hemos trabajado con otras agencias de marketing y diseño que no nos dieron los resultados que esperábamos y estamos felices de que acá si lo están haciendo por nosotros. Nos ayudan a hacer realidad nuestra visión y a obtener mejores resultados”"
          />

          <TarjetaTestimonio
            logo={LUMEN_LOGO_TESTIMONIO}
            alt="Logo Mulatas Cake"
            marca="LUMENE"
            rubro="Consultoria"
            parrafo="”Durante nuestra asociación con Aismaba al servicio de Manejo de Redes Sociales, se nos mostraron nuevas y prometedoras formas de comercializar nuestra empresa. Aprendimos que cada publicación tiene un propósito y esta planificada al detalle para que genere resultados.”"
          />

        </TestimoniosBoxTarjetas>
      </TestimoniosDiv>
    </TestimoniosSection>
  );
};

export default Testimonios;