import { useContext } from "react";
import { ARS_ICON, EEUU_ICON } from "../../../assets/img/images";
import { BoxLabel, CurrencyImg, CurrencyInput, CurrencySelectorBox, Title } from "./CurrencySelectorStyled";
import { CurrencyContext } from "../../../context/CurrencyContext";

const CurrencySelector = () => {
  const { selectedCurrency, setSelectedCurrency } = useContext(CurrencyContext);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  }
  return (
    <CurrencySelectorBox>
      <Title>Selecciona tu moneda:</Title>

      <BoxLabel>
        <CurrencyInput type="radio" name="moneda" value="ARS" checked={selectedCurrency === "ARS"} onChange={handleCurrencyChange}  />
        <CurrencyImg src={ARS_ICON} alt='Bandera Argentina' />
      </BoxLabel>

      <BoxLabel>
        <CurrencyInput type="radio" name="moneda" value="USD" checked={selectedCurrency === "USD"} onChange={handleCurrencyChange}  />
        <CurrencyImg src={EEUU_ICON} alt='Bandera Estados Unidos' />
      </BoxLabel>
    </CurrencySelectorBox>
  );
};

export default CurrencySelector;