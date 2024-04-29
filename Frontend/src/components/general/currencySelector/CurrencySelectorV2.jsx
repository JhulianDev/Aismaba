import { BoxCurrency, Currency, Icon, MainContainer } from './CurrencySelectorV2Styles';
import BANDERA_ARGENTINA from '../../../assets/img/generales/Flag-Argentina.svg';
import BANDERA_EEUU from '../../../assets/img/generales/Flag-EEUU.svg';
import BANDERA_ESPAÑA from '../../../assets/img/generales/Flag-Espana.svg';
import useCurrencyStore from '../../../stores/useCurrencyStore';

const CurrencySelectorV2 = () => {
  const { currencySelected, handleCurrency } = useCurrencyStore();
  return (
    <MainContainer>
      <BoxCurrency $selected={currencySelected === "ARS"} onClick={() => {handleCurrency("ARS")}}>
        <Icon src={BANDERA_ARGENTINA} alt='Bandera Argentina' />
        <Currency>$(ARS)</Currency>
      </BoxCurrency>

      <BoxCurrency $selected={currencySelected === "USD"} onClick={() => {handleCurrency("USD")}}>
        <Icon src={BANDERA_EEUU} alt='Bandera Estados Unidos' />
        <Currency>$(USD)</Currency>
      </BoxCurrency>

      <BoxCurrency $selected={currencySelected === "EUR"} onClick={() => {handleCurrency("EUR")}}>
        <Icon src={BANDERA_ESPAÑA} alt='Bandera España' />
        <Currency>$(EUR)</Currency>
      </BoxCurrency>
    </MainContainer>
  );
};

export default CurrencySelectorV2;