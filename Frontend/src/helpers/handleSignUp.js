import axios from "axios"
import Swal from "sweetalert2"

export const handleSignUp = (e, setLoading, setFormData, apiUrl, navigateFunction, redirectLink) => {
  e.preventDefault()
  setLoading(true);

  // Creamos una variable "data" con los datos obtenidos en el fomulario de registro
  let data = {
    user_name: e.target.user_name.value.trim(),
    email: e.target.email.value.trim(),
    password: e.target.password.value.trim(),
    country: e.target.country.value.trim()
  };

  axios.post(apiUrl, data)
    // Si el registr es exitoso:
    .then(resp => {

      // Mostramos una alerta con el mensaje de exito:
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: `${resp.data.message}`,
        showConfirmButton: false,
        timer: 1600
      })
      // Limpiamos los inputs
      setFormData({ user_name: "", email: "", country: "", password: ""});
      // Redirigimos al usuario a la pagina indicada en el componente:
      navigateFunction(redirectLink)
    })
    // Si el registro da error:
    .catch(error => {

      // Mostramos una alerta con el mensaje de error:
      Swal.fire({
        icon: "info",
        title: "Atención",
        text: `${error.response.data.message}`,
        showConfirmButton: true
      })

      // Mostramos el error en la consola
      console.error(`Error al intentar registrarse: ${error.response.data.message}`)
    })
    .finally(() => {
      setLoading(false);
    });
}