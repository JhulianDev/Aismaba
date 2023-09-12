import axios from "axios"
import Swal from "sweetalert2"
import { getToken } from "./token";
import { API_URL } from "../env/env";
import { formatPrice } from "./prices";

export const handleOrder = (state, userData, selectedCurrency, dolarValue, totalValue, setRequireLogin, setOrder, navigate) => {

  if(!userData) {
    Swal.fire({
      icon: "info",
      title: "Atención",
      text: "Para continuar con la compra debe iniciar sesión",
      showConfirmButton: true
    })
    setRequireLogin(true)
    navigate("/login")
    return;
  }

  const products = state.cart.map((item) => ({
    tipo: item.tipo,
    nombre: item.nombre,
    precio: selectedCurrency === "ARS"
      ? formatPrice.format(item.precio * dolarValue)
      : formatPrice.format(item.precio),
  }));

  const dataOrder = {
    user_id: userData.id,
    user_name: userData.user_name,
    products: products,
    currency: selectedCurrency,
    total: totalValue
  }

  axios.post(`${API_URL}/purchase-orders`, dataOrder, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
    .then((resp) => {
      setOrder(resp.data.order)
      navigate("/checkout")
    })
    .catch((error) => {
      console.log(error)
    })
}