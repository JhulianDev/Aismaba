import { data } from "../../../content/InstakitData";
import FooterV2 from "../../general/footerV2/FooterV2";
import BeneficiosServicios from "../../general/servicios/beneficios/BeneficiosServicios";
import ContactoServicio from "../../general/servicios/contacto/ContactoServicio";
import DescripcionServicio from "../../general/servicios/descripcion/DescripcionServicio";
import InstakitPack from "../../general/servicios/packs/instakitPack/InstakitPack";
import PasosServicio from "../../general/servicios/pasos/PasosServicio";
import PortadaServicio from "../../general/servicios/portada/PortadaServicio";
import PreguntasFrecuentes from "../../general/servicios/preguntas/PreguntasFrecuentes";

const Instakit = () => {
  return (
    <>
      <PortadaServicio
        title={data.frontpage.title}
        subtitle={data.frontpage.subtitle}
        description={data.frontpage.description}
        image={data.frontpage.image}
        link={data.pack.link}
      />

      <BeneficiosServicios
        benefits={data.benefits}
      />

      <DescripcionServicio
        title={data.information.title}
        description={data.information.description}
        images={data.information.images}
      />

      <PasosServicio 
        title={data.process.title}
        subtitle={data.process.subtitle}
        steps={data.process.steps}
      />

      <InstakitPack
        title={data.pack.title}
        subtitle={data.pack.subtitle}
        price={data.pack.price}
        items={data.pack.items}
        delivery={data.pack.delivery}
        bonus={data.pack.bonus}
        link={data.pack.link}
      />

      <PreguntasFrecuentes 
        faqs={data.faqs}
      />

      <ContactoServicio 
        cta={data.contact.cta}
        link={data.contact.link}
      />

      <FooterV2 />
    </>
  );
};

export default Instakit;