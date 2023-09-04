import bcrypt from "bcrypt"

// Esta función valida que el nombre de usuario, correo electrónico y contraseña proporcionados tengan el formato correcto
// Recibe como argumentos el modelo de usuario, el nombre de usuario, correo electrónico y contraseña
export const validateRegisterInputs = async (UserModel, user_name, email, password) => {

  const error = {};// Objeto para almacenar los errores de validación

  // Validar que se proporcionen todos los campos requeridos
  if (!user_name || !email || !password) {
    error.message = "Todos los campos son obligatorios";
    return error;
  }

  // Validar que la contraseña tenga la longitud requerida
  if (password.length < 6 || password.length > 30) {
    error.message = "La contraseña debe tener entre 6 y 30 caracteres.";
    return error;
  }

  // Validar que el nombre de usuario contenga solo letras, números y tenga una longitud mínima de 3 caracteres
  const userNameRegex = /^[a-zA-Z0-9]{3,}$/;
  if (!userNameRegex.test(user_name)) {
    error.message = "El nombre de usuario debe contener solo letras, números y tener una longitud mínima de 3 caracteres.";
    return error;
  }

  // Validar que el correo electrónico tenga el formato adecuado
  const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    error.message = "El correo electrónico proporcionado no es válido.";
    return error;
  }

  // Buscar si ya existe un usuario en la base de datos con el correo electrónico proporcionado 
  const existingEmail = await UserModel.findOne({ where: { email } });
  if (existingEmail) {
    error.message = "Ya existe un usuario con este correo electrónico.";
    return error;
  }

  // Si no hay errores, devolver null
  return null;
}

// Esta función valida que el nombre de usuario y contraseña proporcionados sean correctos
// Recibe como argumentos el modelo de usuario, el nombre de usuario y la contraseña
export const validateLoginInputs = async (email, password, UserModel) => {

  const errors = {};// Objeto para almacenar los errores de validación

  // Validamos que se proporcionen todos los campos requeridos
  // Si no se proporcionaron, detenemos la ejecucion del codigo y retornamos el error.
  if (!email || !password) {
    errors.message = "Todos los campos son obligatorios";
    errors.statusCode = 400;
    return errors;
  }

  // Comprobamos si existe el usuario en la base de datos.
  // Si no existe, detenemos la ejecucion del codigo y retornamos el error.
  const user = await UserModel.findOne({ where: { email } });
  if (!user) {
    errors.message = "Email no registrado";
    errors.statusCode = 401;
    return errors;
  }

  // De existir el usuario:
  // Comprobamos si la contraseña enviada coincide con la contraseña guardada.
  // Si no coincide, detenemos la ejecucion del codigo y retornamos el error.
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    errors.message = "Contraseña invalida" ;
    errors.statusCode = 401;
    return errors;
  }

  // Si no hay errores, devolver null
  return null;
}