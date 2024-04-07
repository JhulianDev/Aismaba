import { MaxWidth, Section } from "../../../../../assets/styles/GeneralStyles";
import CardV4 from "../../../cards/CardV4/CardV4";
import CurrencySelectorV2 from "../../../currencySelector/CurrencySelectorV2";
import { ProductsContainer, Subtitle, Title } from "./ProductsV1Styles";

const ProductsV1 = ({ products, bgColor }) => {
  return (
    <Section $height="100px" $bgColor={bgColor}>
      <MaxWidth $flexDirection="column ">
        <Title>Escoge tu plantilla ideal</Title>
        <Subtitle>Selecciona tu moneda de pago</Subtitle>
        
        <CurrencySelectorV2 />

        <ProductsContainer>
          {products.map((product) => (
            <CardV4
              key={product.id}
              product={product} />
          ))}
        </ProductsContainer>

      </MaxWidth>
    </Section>
  );
};

export default ProductsV1;