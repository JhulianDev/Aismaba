import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CurrencyContextV2 } from '../../../../context/CurrencyContextV2';
import { BoxItem, BoxPrice, Button, CardContainer, Currency, Description, Icon, Item, List, Price, Sign, Tag, Title } from './CardPricingV1Styles';
import CHECK_ICON from "../../../../assets/img/generales/check_icon.svg";

const CardPricingV1 = ({ pack }) => {
  const { currencySelected } = useContext(CurrencyContextV2);
  return (
    <CardContainer>
      <Tag>{pack.tag}</Tag>
      <Title>{pack.title}</Title>
      <Description>{pack.description}</Description>

      <BoxPrice>
        <Sign>$</Sign>
        <Price>{pack.price[currencySelected]}</Price>
        <Currency>{currencySelected}</Currency>
      </BoxPrice>

      <List>
        {pack.items.map((item) => (
          <BoxItem key={uuidv4()}>
            <Icon src={CHECK_ICON} alt='Check icon' />
            <Item>{item}</Item>
          </BoxItem>
        ))}
      </List>

      <Button to={pack.link} target="_blank">Lo Quiero</Button>
    </CardContainer>
  );
};

export default CardPricingV1;