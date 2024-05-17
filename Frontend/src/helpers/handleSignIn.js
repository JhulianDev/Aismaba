import axios from "axios"
import Swal from "sweetalert2"

export const handleSignIn = (e, setLoading, setFormData, apiUrl, setUserFunction, setTokenFunction, navigateFunction, redirectToCart, redirectLink) => {
  e.preventDefault()
  setLoading(true);
  // Creamos una variable "data" con los datos obtenidos en el fomulario de registro
  let data = {
    email: e.target.email.value.trim(),
    password: e.target.password.value.trim()
  };

  axios.post(apiUrl, data)
    // Si el login es exitoso
    .then(resp => {

      // Guardamos la informacion de usuario en el estado global User Store
      setUserFunction(resp.data.user);
      // Guardamos el token de sesión en el Local Storage:
      setTokenFunction(resp.data.token);

      // Mostramos una alerta con el mensaje de exito:
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: `${resp.data.message}`,
        showConfirmButton: false,
        timer: 1600
      })

      // Limpiamos los inputs
      setFormData({ email: "", password: ""});

      // Si el usuario esta iniciando sesión porque intento realizar una orden se le redirige al carrito:
      if (redirectToCart === true) {
        navigateFunction("/carrito")
        return;
      }

      // Redirigimos al usuario a la pagina indicada en el componente:
      navigateFunction(redirectLink)
    })
    // Si el login da error:
    .catch(error => {

      // Mostramos una alerta con el mensaje de error:
      Swal.fire({
        icon: "info",
        title: "Atención",
        text: `${error.response.data.message}`,
        showConfirmButton: true
      })

      // Mostramos el error en la consola
      console.error(`Error al iniciar sesión: ${error.response.data.message}`)
    })
    .finally(() => {
      setLoading(false);
    });
}