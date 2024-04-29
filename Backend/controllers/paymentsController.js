import { MercadoPagoConfig, Preference } from 'mercadopago';
import OrderModel from '../models/OrderModel.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
const preference = new Preference(client);

// Create Preferences Mercado Pago
export const createPreference = async (req, res) => {
  try {
    const body = {
      metadata: { order_id: req.body.order_id },
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
        success: "https://www.aismaba.com/",
        failure: "",
        pending: ""
      },
      auto_return: "approved"
    };

    const preferenceResult = await preference.create({ body });
    res.json({
      preferenceId: preferenceResult.id,
      message: `La preferencia de MercadoPago fue creada exitosamente y su ID es: ${preferenceResult.id}`
    })

  } catch (error) {
    console.error('Error al crear las preferencias de mercado pago:', error);
    res.status(500).json({ message: 'Error al crear las preferencias de mercado pago' });
  }
}

// Verify Payment and update order created with Mercado Pago
export const processPaymentMercadoPago = async (req, res) => {
  try {
    // Obtenemos el payment_id enviado desde el frontend
    const { payment_id } = req.body;
    console.log(req.body)
    // Si el payment_id no esta presente se devuelve el error al front
    if (!payment_id) {
      console.log("No se proporciono el ID del pago");
      return res.status(400).json({ order_status: 'denied', message: 'No se proporciono el ID del pago' });
    }
    // Si el payment_id esta presente realizamos una peticion a la API de pagos de MercadoPago
    const response = await fetch(`https://api.mercadopago.com/v1/payments/${payment_id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${client.accessToken}`
      }
    })
    // Si la peticion NO encuentra un pago asociado al ID devolvemos el error
    if (!response.ok) {
      console.log("El ID proporcionado no fue encontrado en la base de datos de MercadoPago.");
      return res.status(404).json({ order_status: 'denied', message: 'El ID proporcionado no fue encontrado en la base de datos de MercadoPago.' });
    }
    // Si la peticion SI encuentra un pago asociado al ID:
    // Almacenamos la informacion del pago en una constante
    const paymentData = await response.json();
    // Si el pago fue aprobado
    if (paymentData.status === "approved") {
      // Obtenemos el id de la orden desde la metadata:
      const order_id = paymentData.metadata.order_id;
      // Actualizamos la orden en la base de datos para establecer que fue completada
      const [updatedOrders, rowsAffected] = await OrderModel.update(
        { completed: true },
        { where: { id: order_id }, returning: true }
      );
      // Si la actualización es exitosa devolvemos el mensaje de exito
      if (rowsAffected > 0) {
        console.log("Orden completada")
        return res.status(200).json({ order_status: 'completed', message: '¡Orden completada y actualizada!' });
      } else {
        // Si la orden no existe en la base de datos devovlemos el error
        console.error('No se encontro una orden con el ID proporcionado');
        return res.status(500).json({ order_status: 'denied', message: 'No se encontro una orden con el ID proporcionado' });
      }
    } else {
      // Si el pago NO fue aprobado devolvemos el mensaje
      console.log('El pago no fue aprobado')
      return res.status(400).json({ order_status: 'denied', message: 'El pago no fue aprobado' });
    }
    // Si ocurre algun error durante ja ejecucion de verifyPayment devolvemos el error
  } catch (error) {
    console.log('Error al verificar el pago en Mercado Pago:', error);
    return res.status(500).json({ order_status: 'denied', error: 'Se produjo un error al verificar el pago en Mercado Pago.' });
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
  // Actualizamos la orden en la base de datos para establecer que fue completada
  const [updatedOrders, rowsAffected] = await OrderModel.update(
    { completed: true },
    { where: { id: order_id }, returning: true }
  );
  // Si la actualización es exitosa devolvemos el mensaje de exito
  if (rowsAffected > 0) {
    console.log("Orden completada")
    return res.status(200).json({ order_status: 'completed', message: '¡Orden completada y actualizada!' });
  } else {
    // Si la orden no existe en la base de datos devovlemos el error
    console.error('No se encontro una orden con el ID proporcionado');
    return res.status(500).json({ order_status: 'denied', message: 'No se encontro una orden con el ID proporcionado' });
  }
}