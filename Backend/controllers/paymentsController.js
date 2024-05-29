import { MercadoPagoConfig, Preference } from 'mercadopago';
import OrderModel from '../models/OrderModel.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
const preference = new Preference(client);

// Create Preferences Mercado Pago
export const createPreference = async (req, res) => {
  try {
    const idempotencyKey = req.headers['x-idempotency-key']
    const body = {
      metadata: { order_id: req.body.order_id },
      external_reference: { order_id: req.body.order_id },
      items: [
        {
          id: req.body.order_id,
          title: req.body.title,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
          currency_id: "ARS"
        },
      ],
      back_urls: {
        success: "https://www.aismaba.com/compra-realizada/",
        failure: "",
        pending: ""
      },
      auto_return: "approved",
      notification_url: "https://www.aismaba.com/api/v1/mercado_pago/process_payment?source_news=webhooks"
    };

    const preferenceResult = await preference.create({ body, idempotencyKey });
    res.json({
      preferenceId: preferenceResult.id,
      message: `La preferencia de MercadoPago fue creada exitosamente y su ID es: ${preferenceResult.id}`
    })

  } catch (error) {
    console.error('Error al crear las preferencias de mercado pago:', error);
    res.status(500).json({ message: 'Error al crear las preferencias de mercado pago', error: error });
  }
}

// Verify Payment and update order created with Mercado Pago
export const processPaymentMercadoPago = async (req, res) => {
  const payment_id = req.query['data.id'];
  const notification = req.query;
  // Si se recibio el payment_id
  if (payment_id) {
    // Envía la respuesta 200 OK a Mercado Pago para que no repita la notificación
    res.sendStatus(200);
    // Logueamos la recepción de un pago de MercadoPago y su ID
    console.log(`¡Se recibio un pago de MercadoPago! Payment ID: ${payment_id}`)
    try {
      // Realizamos una peticion a la API de pagos de MercadoPago:
      const response = await fetch(`https://api.mercadopago.com/v1/payments/${payment_id}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${client.accessToken}`
        }
      })
      // Si la peticion encuentra un pago asociado al ID:
      if (response.ok) {
        // Almacenamos la informacion del pago en una constante
        const paymentData = await response.json();
        // Si el pago fue aprobado
        if (paymentData.status === "approved") {
          console.log(`El pago fue aprobado. Payment ID: ${payment_id}`)
          // Obtenemos el id de la orden desde la metadata:
          const order_id = paymentData.metadata.order_id;
          // Actualizamos la orden en la base de datos para establecer que fue completada
          const [updatedOrders, rowsAffected] = await OrderModel.update(
            { completed: true },
            { where: { id: order_id }, returning: true }
          );
          // Si la actualización es exitosa devolvemos el mensaje de exito
          if (rowsAffected > 0) {
            console.log(`¡Orden completada y actualizada! ID: ${payment_id}`)
          } else {
            // Si la orden no existe en la base de datos logueamos el error
            console.log(`No se encontro una orden con el ID proporcionado. Payment ID: ${payment_id}`);
          }
        } else {
          // Si el pago no fue aprobado logueamos el estado del pago:
          console.log(`El pago con ID ${payment_id} no fue aprobado. Estado del pago: ${paymentData.status}`);
        }
      } else {
        // Si ocurre un error en la respuesta de la API de pagos de MercadoPago logueamos el error:
        console.log(`No se encuentró un pago asociado al ID proporcionado. Payment ID: ${payment_id}`);
      }
    } catch (error) {
      // Si ocurre un error en el bloque trycatch loguemoa el error
      console.log('Error al verificar el pago en Mercado Pago:', error);
    }
  } else {
    // Si el Payment ID no es proporcionado se muestra el contenido de la notificación
    console.log("Se recibio una notificacion de mercado pago:");
    console.log(notification);
  }
}

// Verify and update order created with paypal
export const processPaymentPaypal = async (req, res) => {
  // Obtenemos el order_id enviado desde el frontend
  const { order_id } = req.body;
  // Si el order_id NO esta presente se devuelve el error al front
  if (!order_id) {
    console.log("No se proporciono el ID de la orden");
    return res.status(400).json({ order_status: 'denied', message: 'No se proporciono el ID de la orden' });
  }
  // Logueamos la recepción de un pago de Paypal y su ID
  console.log(`¡Se recibio un pago de Paypal! Order ID: ${order_id}`)
  // Actualizamos la orden en la base de datos para establecer que fue completada
  const [updatedOrders, rowsAffected] = await OrderModel.update(
    { completed: true },
    { where: { id: order_id }, returning: true }
  );
  // Si la actualización es exitosa devolvemos el mensaje de exito
  if (rowsAffected > 0) {
    console.log(`¡Orden completada y actualizada! Order ID: ${order_id}`)
    return res.status(200).json({ order_status: 'completed', message: '¡Orden completada y actualizada!' });
  } else {
    // Si la orden no existe en la base de datos devovlemos el error
    console.log(`No se encontro una orden con el ID proporcionado Order ID: ${order_id}`);
    return res.status(500).json({ order_status: 'denied', message: 'No se encontro una orden con el ID proporcionado' });
  }
}