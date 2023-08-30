import { createContext, useState } from "react";

const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("ARS");
  const dolarValue = 350

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setSelectedCurrency, dolarValue }}>
      { children }
    </CurrencyContext.Provider>
  )
}

export { CurrencyContext, CurrencyProvider };