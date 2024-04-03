import HeroV3 from "../../general/Heros/HeroV3/HeroV3";
import { data } from "../../../content/ShopData"
import { coloresV2 } from "../../../assets/css/Colors";

const Shop = () => {
  return (
    <>
      <HeroV3
        data={data.hero}
        bgColor={coloresV2.colorSecundario}
      />
    </>
  );
};

export default Shop;