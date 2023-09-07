import axios from "axios"
import Swal from "sweetalert2"
import { API_URL } from "../env/env";
import { setToken } from "./token";

// Funcion para manejar el envio de formulario del Login y el Sign Up:
export const handleForm = (e, type, url, redirectLink, navigate, setUserData) => {
  e.preventDefault()

  // Si al usar la funcion NO se indica el argumanto type="SignUp" data será igual a:
  let data = {
    email: e.target.email.value,
    password: e.target.password.value
  };

  // Si al usar la funcion SI se indica el argumanto type="SignUp" data será igual a:
  if (type === "SignUp") {
    data = {
      ...data, // Conserva las propiedades anteriores y se añaden las siguientes:
      user_name: e.target.user_name.value,
      country: e.target.country.value
    };
  }

  // Enviamos la data a la API_URL y obtenemos las respuestas:
  axios.post(`${API_URL}${url}`, data)
    .then(resp => {
      // Si la respuesta contiene el token lo guardamos en el Local Storage:
      if (resp.data.token) {
        setToken(resp.data.token);
        setUserData(resp.data.user);
      }

      // Mostramos una alerta con el mensaje de exito:
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: `${resp.data.message}`,
        showConfirmButton: false,
        timer: 1600
      })

      // Redirigimos al usuario a la pagina indicada en el componente:
      navigate(redirectLink)
    })
    .catch(error => {
      Swal.fire({
        icon: "info",
        title: "Atención",
        text: `${error.response.data.message}`,
        showConfirmButton: true
      })
      console.log(error.response.data.message)
    })
};