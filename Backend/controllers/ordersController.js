import { v4 as uuidv4 } from 'uuid';
import OrderModel from "../models/OrderModel.js";
import dotenv from 'dotenv';
dotenv.config();

// Purchase order
export const createOrder = async (req, res) => {
  try {
    const { user_id, user_name, products, currency, total } = req.body;

    // Verifica si el usuario y la orden está presente en la solicitud
    if (!user_id || !user_name || !products || !currency || !total) {
      return res.status(400).json({ error: 'La solicitud no incluye una orden válida.' });
    }

    // Generamos un ID único para la orden usando la biblioteca uuid
    const orderId = uuidv4();

    // Convertimos el objeto 'products' en una cadena JSON
    const productsJson = JSON.stringify(products);

    // Creamos la orden en la base de datos
    const order = await OrderModel.create({
      id: orderId,
      user_id: user_id,
      user_name: user_name,
      products: productsJson,
      currency: currency,
      total: total,
      completed: false
    });

    // Responde con una confirmación exitosa y la información de la orden
    console.log("¡Orden creada exitosamente!")
    return res.status(201).json({ message: 'Orden de compra creada', order });
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir durante el proceso
    console.log('Error al crear la orden de compra:', error);
    return res.status(500).json({ message: 'Se produjo un error al procesar la orden de compra.' });
  }
}

// Get Purchases
export const getOrdersCompleted = async (req, res) => {
  try {
    // Consulta las órdenes completadas del usuario
    const ordersCompleted = await OrderModel.findAll({
      where: {
        user_id: req.user.id, // Filtra por el ID del usuario
        completed: true, // Filtra las órdenes completadas
      },
    });

    // Verificamos si se existen órdenes completadas
    if (ordersCompleted.length > 0) {
      // Si existen mapeamos cada orden completada para extraer el ID de cada producto:
      const productsId = ordersCompleted.map(order => {
        const products = JSON.parse(order.products); // Convierte la cadena JSON de productos en un objeto
        return products.map(product => product.id); // Mapea cada producto y devuelve solo el ID
      }).flat(); // Aplana el array de arrays de IDs para obtener un solo array de IDs de productos

      // Enviamos una respuesta con los productsId encontrados
      res.status(200).json({ message: "Ordenes completadas encontradas con éxito!", productsId })
    } else {
      // Si no se encontraron órdenes completadas, responder sin resultados
      console.log('El usuario no posee órdenes completadas.');
      res.status(200).json({ message: "El usuario no posee órdenes completadas." });
    }
  } catch (error) {
    // Manejar cualquier error que ocurra durante la consulta
    console.error('Error al buscar las órdenes del usuario:', error);
    res.status(500).json({ message: 'Error al buscar las órdenes del usuario.' });
  }
}