import { validateRegisterInputs, validateLoginInputs } from "../helpers/helper.js";
import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import dotenv from 'dotenv';
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
      res.status(404).json({ message: `El id proporcionado no corresponde a ningun usuario` })
    }

  } catch (error) {
    console.log(`Error al intentar obtener el usuario: ${error}`)
    res.status(500).json({ message: `Error al intentar obtener el usuario` })
  }
}
