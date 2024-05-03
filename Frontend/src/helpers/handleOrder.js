import axios from "axios"
import Swal from "sweetalert2"
import useUserStore from "../stores/useUserStore"
import useCartStore from "../stores/useCartStore";
import useCurrencyStore from "../stores/useCurrencyStore";
import useOrderStore from "../stores/useOrderStore";
import { API_URL } from "../env/env";

export const handleOrder = async (navigateFunction, setLoading) => {
  const { userData, userToken, setRedirectToCart } = useUserStore.getState();
  const { cartItems, totalAmount } = useCartStore.getState();
  const { currencySelected } = useCurrencyStore.getState();
  const { setOrderId, setOrderPreferenceId } = useOrderStore.getState();

  // Comprobamos que el usuario haya iniciado sesión
  if (!userData) {
    // Si no ha iniciado sesión:
    // Mostramos una alerta
    Swal.fire({
      icon: "info",
      title: "Atención",
      text: "Para continuar con la compra debe iniciar sesión",
      showConfirmButton: true
    })
    // lo redirigimos al Login
    // Una vez inicie sesión sera redirigido al carrito
    setRedirectToCart(true);
    navigateFunction("/login");
    return;
  }

  // Si el usuario tiene la sesión iniciada:

  // Indicamos que el proceso de carga de la orden se ha iniciado:
  setLoading(true);

  // Creamos un objeto con los productos y el precio
  const products = cartItems.map((product) => ({
    id: product.id,
    type: product.type,
    name: product.name,
    price: product.price[currencySelected],
  }));

  // Creamos la data de la orden
  const dataOrder = {
    user_id: userData.id,
    user_name: userData.user_name,
    products: products,
    currency: currencySelected,
    total: totalAmount(currencySelected)
  }

  // Enviamos la petición POST al backend para crear la orden de compra
  try {
    const orderResponse = await axios.post(`${API_URL}/create-order`, dataOrder, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
    // Si la orden es creada con exito:
    // Guardamos el id de la orden en el estado global
    setOrderId(orderResponse.data.order.id)

    // Si la moneda selecionada es ARS
    if (currencySelected === "ARS") {
      // Creamos la dataPreference de la orden para MercadoPago
      const dataPreference = {
        order_id: orderResponse.data.order.id,
        title: "Tienda Aismaba",
        price: totalAmount(currencySelected),
        quantity: 1
      }
      // Enviamos la petición POST al backend para generar preferencia de Mercado Pago
      try {
        const preferenceResponse = await axios.post(`${API_URL}/mercado_pago/create_preference`, dataPreference, {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        });
        // Si la preferencia es creada con exito:
        // Guardamos el id de la preferencia en el estado global
        setOrderPreferenceId(preferenceResponse.data.preferenceId)
        // Redireccionamos al checkout
        navigateFunction("/checkout");
        // Manejo de errores:
      } catch (error) {
        console.error(error)
        console.log(`Error al crear preferencia MercadoPago: ${error}`)
      }
    }

    // Si la moneda seleccionada es USD o EUR
    // Redireccionamos al checkout
    navigateFunction("/checkout");

    // Manejo de errores:
  } catch (error) {
    console.error(error)
    console.log(`Error al generar la orden de compra: ${error}`)
  } finally {
    setLoading(false); // Set loading to false in any case (success or error)
  }
}
