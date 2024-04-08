import { useParams } from "react-router-dom";
import useShopStore from "../../../../stores/useShopStore"
import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import SliderV2 from "../../../general/sliders/SliderV2/SliderV2";
import { coloresV2 } from "../../../../assets/css/Colors";

const ProductV1 = () => {
  const { TemplatesData } = useShopStore();
  const { id } = useParams();
  const template = TemplatesData.find(template => template.id === id);

  return (
    <Section $bgColor={coloresV2.colorSecundario}>
      <MaxWidth $justifyContent="center">
        <SliderV2 product={template} />
      </MaxWidth>
    </Section>
  );
};

export default ProductV1;