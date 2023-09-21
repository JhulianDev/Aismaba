import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { API_URL, PAYPAL_ID } from "../../../env/env";
import { CartContext } from "../../../context/CartContext";
import { getToken } from "../../../helpers/token";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Swal from "sweetalert2"
import axios from "axios"

const PaypalPayment = ({ value, createdOrder, setLoading }) => {
  const { dispatch, setOrder } = useContext(CartContext)
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(false)
  }, []);

  return (
    <PayPalScriptProvider options={{ clientId: PAYPAL_ID }}>
      <PayPalButtons
        createOrder={(_, actions) => {
          // Paso 1: Crear una orden en PayPal
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: value, // El valor total de la orden
                },
                custom_id: createdOrder.id // Identificador personalizado de la orden
              },
            ],
          })
        }}
        onApprove={(_, actions) => {
          // Paso 2: Capturar el pago cuando se aprueba
          return actions.order.capture().then((resp) => {
            if (resp.status === "COMPLETED") {
              // Paso 3: Si el pago se completa con éxito

              // Paso 3.1: Actualizar la orden en tu servidor
              axios.put(`${API_URL}/order/${createdOrder.id}`, null, {
                headers: {
                  Authorization: `Bearer ${getToken()}` // Autenticación con token
                }
              })
                .then((resp) => {
                  // Paso 3.2: Limpia la orden y el carrito después del pago exitoso
                  setOrder(undefined);
                  dispatch({ type: "CLEAR_CART" });

                  // Paso 3.3: Muestra un mensaje de éxito al usuario
                  Swal.fire({
                    icon: "success",
                    title: "Éxito",
                    text: `¡Pago Exitoso!`,
                    showConfirmButton: false,
                    timer: 1800 // Tiempo para mostrar el mensaje
                  })

                  // Paso 3.4: Redirige al usuario a la página de agradecimiento
                  navigate("/gracias-compra");
                })
                .catch((error) => {
                  console.log(error); // Manejo de errores en caso de fallo en la actualización
                })
            } else {
              // Paso 4: Si el pago no se procesa con éxito, muestra un mensaje de atención al usuario
              Swal.fire({
                icon: "info",
                title: "Atención",
                text: `Tu pago no se procesó. Intenta nuevamente.`,
                showConfirmButton: true
              })
            }
          })
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalPayment;