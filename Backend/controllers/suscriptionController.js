import { validateNewsletterInputs } from "../helpers/helper.js";
import SuscriptionModel from "../models/SuscriptionModel.js";

// Register
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