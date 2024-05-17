import { useEffect } from "react";
import { data } from "../../../content/InstakitData";
import { coloresV2 } from "../../../assets/css/Colors";
import HeroV1 from "../../general/Heros/HeroV1/HeroV1";
import FooterV2 from "../../general/footerV2/FooterV2";
import BeneficiosServicios from "../../general/servicios/beneficios/BeneficiosServicios";
import ContactoServicio from "../../general/servicios/contacto/ContactoServicio";
import DescripcionServicio from "../../general/servicios/descripcion/DescripcionServicio";
import InstakitPack from "../../general/servicios/packs/instakitPack/InstakitPack";
import PreguntasFrecuentes from "../../general/servicios/preguntas/PreguntasFrecuentes";
import Proceso from "../../general/servicios/proceso/Proceso";

const Instakit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroV1
        tag={data.hero.tag}
        icon={data.hero.icon}
        title={data.hero.title}
        description={data.hero.description}
        buttonType={data.hero.buttonType}
        callToAction={data.hero.callToAction}
        link={data.hero.link}
        image={data.hero.image}
        alt={data.hero.alt}
        borderBottom={true}
      />

      <BeneficiosServicios
        benefits={data.benefits}
      />

      <DescripcionServicio
        title={data.information.title}
        description={data.information.description}
        images={data.information.images}
      />

      <Proceso
        title={data.process.title}
        steps={data.process.steps}
        image={data.process.image}
        bgColor={coloresV2.colorPrincipal}
      />

      <InstakitPack
        title={data.pack.title}
        subtitle={data.pack.subtitle}
        price={data.pack.price}
        items={data.pack.items}
        delivery={data.pack.delivery}
        bonus={data.pack.bonus}
        link={data.pack.link}
        bgColor={coloresV2.colorSecundario}
      />

      <PreguntasFrecuentes
        faqs={data.faqs}
        bgColor={coloresV2.colorPrincipal}
      />

      <ContactoServicio
        cta={data.contact.cta}
        link={data.contact.link}
        bgColor={coloresV2.colorSecundario}
      />

      <FooterV2 />
    </>
  );
};

export default Instakit;