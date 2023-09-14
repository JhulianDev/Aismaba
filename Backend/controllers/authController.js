import { validateRegisterInputs, validateLoginInputs } from "../helpers/helper.js";
import UserModel from "../models/UserModel.js";
import { v4 as uuidv4 } from 'uuid';
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import dotenv from 'dotenv';
import OrderModel from "../models/OrderModel.js";
dotenv.config();

// Register
export const register = async (req, res) => {
  try {
    const { user_name, email, password, country } = req.body;

    // Validamos los datos ingresados por el usuario
    const errors = await validateRegisterInputs(UserModel, user_name, email, password, country);

    // Si hay errores:
    // Devolvemos un error 400 y los mensajes de error
    // Detenemos la ejecucion del codigo
    if (errors !== null) {
      res.status(400).json(errors);
      console.log(errors);
      return;
    }

    // Si no hay errores: 
    // Generamos el hash de la contraseña
    let hashedPassword = bcrypt.hashSync(req.body.password, Number.parseInt(process.env.JWT_ROUNDS));

    // Creamos el usuario en la base de datos
    const user = await UserModel.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: hashedPassword,
      country: req.body.country,
      is_admin: false
    });

    // Devolvemos los datos del usuario y el token generado
    res.status(201).json({
      message: "¡Usuario creado con éxito!",
      user: {
        id: user.id,
        user_name: user.user_name,
        email: user.email
      }
    });

  } catch (error) {
    console.log(`Ha ocurrido un error al intentar crear el usuario: ${error}`)
    res.status(500).json({ message: `Ha ocurrido un error al intentar crear el usuario` })
  }
}

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validamos los datos ingresados por el usuario
    const errors = await validateLoginInputs(email, password, UserModel);

    // Si hay errores:
    // Devolvemos el codigo de error y los mensajes de error
    // Detenemos la ejecucion del codigo
    if (errors !== null) {
      res.status(errors.statusCode).json(errors);
      console.log(errors.message);
      return;
    }

    // Si el usuario y contraseña son correctos:
    // Obtenemos el usuario y generamos la data para el jwt
    const user = await UserModel.findOne({ where: { email } });
    const userDataJwt = { id: user.dataValues.id, user_name: user.dataValues.user_name, email: user.dataValues.email, is_admin: user.dataValues.is_admin };

    // Generamos el JWT para el usuario:
    let token = jwt.sign({ user: userDataJwt }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION
    });

    // Devolvemos los datos correspondientes al usuario:
    res.status(200).json({
      message: "¡Login exitoso!",
      user: {
        id: user.id,
        user_name: user.user_name,
        email: user.email,
        country: user.country,
        is_admin: user.is_admin
      },
      token: token
    })

  } catch (error) {
    console.log(`Ha ocurrido un error al intentar hacere el Login: ${error}`)
    res.status(500).json({ message: `Ha ocurrido un error al intentar hacer el Login` })
  }
}

// Get user
export const getUser = async (req, res) => {
  try {
    // Obtenermos el usuario y lo asignamos a una constante
    const user = await UserModel.findOne({ where: { id: req.user.id } })

    // Si el usuario existe devolvemos su informacion:
    if (user) {
      res.status(200).json({
        message: "Usuario encontrado con exito!",
        user: {
          id: user.id,
          user_name: user.user_name,
          email: user.email,
          country: user.country,
          is_admin: user.is_admin
        }
      })
      // Si el usuario no existe devolvemos el error:
    } else {
      console.log("El id proporcionado no corresponde a ningun usuario")
      res.status(404).json({ message: `Error al intentar obtener el usuario` })
    }

  } catch (error) {
    console.log(`Error al intentar obtener el usuario: ${error}`)
    res.status(500).json({ message: `Error al intentar obtener el usuario` })
  }
}

// Purchase order
export const purchaseOrder = async (req, res) => {
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
    return res.status(201).json({ message: 'Orden de compra creada', order });
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir durante el proceso
    console.log('Error al crear la orden de compra:', error);
    return res.status(500).json({ message: 'Se produjo un error al procesar la orden de compra.' });
  }
}

// Update order
export const updateOrder = async (req, res) => {
  try {
    // Obtén el ID de la orden de los parámetros de la URL
    const orderId = req.params.id;

    // Actualiza la orden en la base de datos para establecer "completed" en true
    await OrderModel.update(
      { completed: true }, // Actualiza el campo "completed" a true
      { where: { id: orderId }, returning: true } // Utiliza el ID de la orden para encontrar la orden a actualizar
    );
    // Responde con un mensaje de éxito
    res.status(200).json({
      message: "Orden actualizada exitosamente"
    });
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir durante el proceso
    console.log('Error al actualizar la orden de compra:', error);
    return res.status(500).json({ message: 'Se produjo un error al actualizar la orden de compra.' });
  }
}

// getPurchases
export const getPurchases = async (req, res) => {
  try {
    // Consulta las órdenes completadas del usuario
    const purchases = await OrderModel.findAll({
      where: {
        user_id: req.user.id, // Filtra por el ID del usuario
        completed: true, // Filtra las órdenes completadas
      },
    });

    // Verifica si se existen órdenes completadas
    if (purchases.length > 0) {
      // Si existen responder con las órdenes encontradas
      res.status(200).json({ message: "Ordenes completadas encontradas con éxito!", hasPurchases: true, purchases })
    } else {
      // Si no se encontraron órdenes completadas, responder sin resultados
      console.log('No se encontraron órdenes completadas para este usuario.');
      res.status(200).json({ message: "No se encontraron órdenes completadas para este usuario.", hasPurchases: false });
    }
  } catch (error) {
    // Manejar cualquier error que ocurra durante la consulta
    console.error('Error al buscar las órdenes del usuario:', error);
    res.status(500).json({ message: 'Error al buscar las órdenes del usuario.' });
  }
}

