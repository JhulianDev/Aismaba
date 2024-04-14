import { MercadoPagoConfig, Preference } from 'mercadopago';
import dotenv from 'dotenv';
dotenv.config();

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
const preference = new Preference(client);

// Create Preferences Mercado Pago
export const createPreference = async (req, res) => {
  try {
    const body = {
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
      auto_return: "approved",
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
