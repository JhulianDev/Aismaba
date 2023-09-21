import axios from "axios"
import Swal from "sweetalert2"
import { getToken } from "./token";
import { API_URL } from "../env/env";
import { formatPrice } from "./prices";


export const handleOrder = async (state, userData, selectedCurrency, dolarValue, totalValue, setRequireLogin, setOrder, setPreferenceId, loading, setLoading, navigate) => {

  setLoading(true);

  if (!userData) {
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

  try {
    const orderResponse = await axios.post(`${API_URL}/purchase-orders`, dataOrder, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    });
    setOrder(orderResponse.data.order);

    if (selectedCurrency === "ARS") {

      const dataPreference = {
        order_id: orderResponse.data.order.id,
        title: "Tienda Aismaba",
        price: totalValue,
        quantity: 1
      }

      try {
        const preferenceResponse = await axios.post(`${API_URL}/mercado_pago/create_preference`, dataPreference, {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        });
        setPreferenceId(preferenceResponse.data.id);
        navigate("/checkout");
      } catch (preferenceError) {
        console.log(preferenceError);
      }
    }
    navigate("/checkout");
  } catch (orderError) {
    console.log(orderError);
  } finally {
    setLoading(false); // Set loading to false in any case (success or error)
  }
}