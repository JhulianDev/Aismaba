import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();

// Este Middleware valida la autorización del usuario mediante el token JWT
export const validateAuthorization = (req, res, next) => {
  // Comprobamos si existe el token:
  // Si no existe devolvemos el error
  if (!req.headers.authorization) {
    res.status(401).json({ message: "No se proporcionó el token de autorización" });
    return;
  } else {
    // Si existe el token:
    // Guardamos el valor del token en una variable 
    let token = req.headers.authorization.split(" ")[1];
    // Comprobamos la validez del token
    // Si es invalido devolvemos el error
    // Si es valido se llama a la función next() 
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        console.log(`El token proporcionado no es valido: ${error.message}`);
        res.status(403).json({ message: "El token proporcionado no es valido" });
        return;
      } else {
        // Agregamos los datos del usuario al objeto request (req)
        req.user = decoded.user;
        next();
      }
    })
  }
}