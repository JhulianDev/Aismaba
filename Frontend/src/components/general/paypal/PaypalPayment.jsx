import Swal from "sweetalert2"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PAYPAL_ID } from "../../../env/env";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PaypalPayment = ({ value, orderId, setLoading, currency }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(false)
  }, []);

  return (
    <PayPalScriptProvider options={{ clientId: PAYPAL_ID, currency: currency }}>
      <PayPalButtons
        createOrder={(_, actions) => {
          // Creamos una orden en PayPal con el monto total y el id de la orden
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: value,
                },
                custom_id: orderId
              },
            ],
          })
        }}
        // Función que se ejecuta cuando se aprueba el pago
        onApprove={(_, actions) => {
          // Capturamos el pago cuando se aprueba
          return actions.order.capture().then((resp) => {
            // Si el pago se completa con éxito
            if (resp.status === "COMPLETED") {
              // Redirigimos al usuario a la página de compra realizada
              navigate(`/compra-realizada/?order_id=${orderId}`);
            } else {
              // Si el pago no se procesa con éxito, muestramos un mensaje de error al usuario
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