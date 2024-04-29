import HeroV3 from "../../general/Heros/HeroV3/HeroV3";
import { data } from "../../../content/ShopData"
import { coloresV2 } from "../../../assets/css/Colors";
import ProductsV1 from "../../general/Sections/Products/ProductsV1/ProductsV1";
import SeparatorV1 from "../../general/Separators/SeparatorV1/SeparatorV1";
import useShopStore from "../../../stores/useShopStore"
import { useEffect } from "react";

const Shop = () => {
  const { TemplatesData } = useShopStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroV3
        data={data.hero}
        bgColor={coloresV2.colorSecundario}
      />

      <SeparatorV1
        data="INSTAKIT · CREACIÓN DE CONTENIDO · DISEÑO WEB · PLANTILLAS EDITABLES · INSTAKIT · CREACIÓN DE CONTENIDO · DISEÑO WEB · PLANTILLAS EDITABLES · INSTAKIT · CREACIÓN DE CONTENIDO · DISEÑO WEB · PLANTILLAS EDITABLES · INSTAKIT · CREACIÓN DE CONTENIDO · DISEÑO WEB · PLANTILLAS EDITABLES"
      />

      <ProductsV1 
        products={TemplatesData}
        bgColor={coloresV2.colorSecundario}
      />
    </>
  );
};

export default Shop;