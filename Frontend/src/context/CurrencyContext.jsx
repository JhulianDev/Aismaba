import axios from "axios"
import { createContext, useEffect, useState } from "react";
import { API_URL } from "../env/env";

const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("ARS");
  const [dolarValue, setDolarValue] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`${API_URL}/private`);
        setDolarValue(resp.data.dolar_value);
      } catch (error) {
        console.error(`Error al obtener el valor del dólar: ${error.response.data.message}`);
      }
    };

    fetchData();
  }, []);

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setSelectedCurrency, dolarValue }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export { CurrencyContext, CurrencyProvider };