import FooterV2 from "../../general/footerV2/FooterV2";
import BeneficiosServicios from "../../general/servicios/beneficios/BeneficiosServicios";
import ContactoServicio from "../../general/servicios/contacto/ContactoServicio";
import DescripcionServicio from "../../general/servicios/descripcion/DescripcionServicio";
import InstakitPack from "../../general/servicios/packs/instakitPack/InstakitPack";
import PasosServicio from "../../general/servicios/pasos/PasosServicio";
import PortadaServicio from "../../general/servicios/portada/PortadaServicio";
import PreguntasFrecuentes from "../../general/servicios/preguntas/PreguntasFrecuentes";
import { instakit } from "../../../content/instakitContent";

const Instakit = () => {
  return (
    <>
      <PortadaServicio
        titulo={instakit.portada.titulo}
        subtitulo={instakit.portada.subtitulo}
        descripcion={instakit.portada.descripcion}
        imagen={instakit.portada.imagen}
      />

      <BeneficiosServicios
        benefits={instakit.beneficios}
      />

      <DescripcionServicio
        title={instakit.informacion.titulo}
        description={instakit.informacion.descripcion}
        images={instakit.informacion.imagenes}
      />

      <PasosServicio 
        title={instakit.proceso.title}
        subtitle={instakit.proceso.subtitle}
        steps={instakit.proceso.steps}
      />

      <InstakitPack
        title={instakit.pack.title}
        subtitle={instakit.pack.subtitle}
        price={instakit.pack.price}
        items={instakit.pack.items}
        delivery={instakit.pack.delivery}
        bonus={instakit.pack.bonus}
        link={instakit.pack.link}
      />

      <PreguntasFrecuentes 
        faqs={instakit.faqs}
      />

      <ContactoServicio 
        cta={instakit.contact.cta}
        link={instakit.contact.link}
      />

      <FooterV2 />
    </>
  );
};

export default Instakit;