import { createContext, useState } from "react";

const CurrencyContextV2 = createContext();

const CurrencyProviderV2 = ({ children }) => {
  const [currencySelected, setCurrencySelected] = useState("USD");

  const handleCurrency = (currency) => {
    setCurrencySelected(currency)
  }

  return (
    <CurrencyContextV2.Provider value={{ currencySelected, handleCurrency }}>
      {children}
    </CurrencyContextV2.Provider>
  )
}

export { CurrencyContextV2, CurrencyProviderV2 };