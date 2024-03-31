import React from 'react';
import { MaxWidth, Section } from '../../../../assets/styles/GeneralStyles';
import { BoxTexts, BrandCategory, BrandLogo, BrandName, Card, ContainerCards, ContainerIdentifier, Paragraph, Quotes, Subtitle, Title } from './TestimonialsV1Styles';
import QUOTES_ICON from "../../../../assets/img/generales/home/quotes_icon.svg"

const TestimonialsV1 = ({ data, bgColor }) => {
  return (
    <Section $height="100px" $bgColor={bgColor} $borderBottom>
      <MaxWidth $flexDirection="column">

        <Title>TESTIMONIOS QUE</Title>
        <Subtitle>NOS HACEN FELICES</Subtitle>

        <ContainerCards>
          {data.map((brand) => (
            <Card key={brand.id}>
              <Quotes src={QUOTES_ICON} alt='Quotes icon' />
              <Quotes src={QUOTES_ICON} alt='Quotes icon' $bottom/>
              <Paragraph>{brand.testimony}</Paragraph>

              <ContainerIdentifier>
                <BrandLogo src={brand.logo} alt={brand.alt} />

                <BoxTexts>
                  <BrandName>{brand.name}</BrandName>
                  <BrandCategory>{brand.category}</BrandCategory>
                </BoxTexts>
              </ContainerIdentifier>
            </Card>
          ))}
        </ContainerCards>

      </MaxWidth>
    </Section>
  );
};

export default TestimonialsV1;