import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Item, Table, Title } from "./ProductV1Styles";
import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { coloresV2 } from "../../../../assets/css/Colors";
import SliderV2 from "../../../general/sliders/SliderV2/SliderV2";
import FooterV2 from "../../../general/footerV2/FooterV2";
import useShopStore from "../../../../stores/useShopStore"

const ProductV1 = () => {
  const { TemplatesData } = useShopStore();
  const { id } = useParams();
  const template = TemplatesData.find(template => template.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section $bgColor={coloresV2.colorSecundario}>
        <MaxWidth $justifyContent="center" $flexDirection="column">
          
          <SliderV2 product={template} />

          <Table>
            <Title>¿Que incluye este pack?</Title>
            {template.content.map((item) => (
              <Item key={uuidv4()}>{item}</Item>
            ))}
          </Table>

        </MaxWidth>
      </Section>

      <FooterV2 />
    </>
  );
};

export default ProductV1;