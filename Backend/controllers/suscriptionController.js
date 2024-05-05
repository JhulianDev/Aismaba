import { validateNewsletterInputs } from "../helpers/helper.js";
import SuscriptionModel from "../models/SuscriptionModel.js";

// Suscription to newsletter
export const newsletter_suscription = async (req, res) => {
  try {
    const { user_name, email, country } = req.body;

    // Validamos los datos ingresados por el usuario
    const errors = await validateNewsletterInputs(user_name, email, country);

    // Si hay errores:
    // Devolvemos un error 400 y los mensajes de error
    // Detenemos la ejecucion del codigo
    if (errors !== null) {
      res.status(400).json(errors);
      console.log(errors);
      return;
    }

    // Si no hay errores: 

    // Buscar si ya existe un usuario en la base de datos con el correo electrónico proporcionado 
    const existingEmail = await SuscriptionModel.findOne({ where: { email } });
    // Si existe, devolvemos mensaje de éxito.
    if (existingEmail) {
      res.status(201).json({
        message: "¡Suscripcion exitosa!"
      });
      return;
    }

    // Si no existe:
    // Agregamos la suscripcion a la base de datos
    await SuscriptionModel.create({
      user_name: req.body.user_name,
      email: req.body.email,
      country: req.body.country
    });

    // Devolvemos mensaje de éxito.
    res.status(201).json({
      message: "¡Suscripcion al Newsletter Aismaba exitosa!"
    });

  } catch (error) {
    console.log(`Error al crear la suscripción: ${error}`)
    res.status(500).json({ message: `Error al crear la suscripción` })
  }
}

// Get Suscriptions
export const getSuscriptions = async (req, res) => {
  if (req.user.is_admin) {
    try {
      // Consulta las suscribciones en la base de datos
      const suscriptions = await SuscriptionModel.findAll();

      // Si se existen suscripciones:
      if (suscriptions.length > 0) {
        // Enviamos una respuesta con las suscripciones
        res.status(200).json({ message: "Suscripciones encontradas con éxito!", suscriptions })
      } else {
        // Si no se encontraron suscripciones, responder sin resultados
        console.log('No existen suscripciones en la base de datos');
        res.status(200).json({ message: "No existen suscripciones en la base de datos." });
      }
    } catch (error) {
      // Manejar cualquier error que ocurra durante la consulta
      console.error('Error al obtener las suscripciones en la base de datos:', error);
      res.status(500).json({ message: 'Error al obtener las suscripciones en la base de datos.' });
    }
  } else {
    // Si el usuario no es administrador, devolver un código de estado 403 (Prohibido)
    res.status(403).json({ message: '¡Acceso Denegado! Su usuario no tiene permisos para acceder a esta area.' });
  }
}