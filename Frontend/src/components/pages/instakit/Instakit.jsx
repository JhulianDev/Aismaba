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
        title={instakit.frontpage.title}
        subtitle={instakit.frontpage.subtitle}
        description={instakit.frontpage.description}
        image={instakit.frontpage.image}
      />

      <BeneficiosServicios
        benefits={instakit.benefits}
      />

      <DescripcionServicio
        title={instakit.information.title}
        description={instakit.information.description}
        images={instakit.information.images}
      />

      <PasosServicio 
        title={instakit.process.title}
        subtitle={instakit.process.subtitle}
        steps={instakit.process.steps}
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