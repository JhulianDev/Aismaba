import axios from "axios"
import Swal from "sweetalert2"

export const handleSignIn = (e, setLoading, apiUrl, setUserFunction, setTokenFunction, navigateFunction, requireLogin, redirectLink) => {
  e.preventDefault()
  setLoading(true);
  // Creamos una variable "data" con los datos obtenidos en el fomulario de registro
  let data = {
    email: e.target.email.value,
    password: e.target.password.value
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

      // Si el usuario esta iniciando sesión porque intento realizar una orden se le redirige al carrito:
      if (requireLogin === true) {
        navigate("/carrito")
        return;
      }

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
      console.log(error)
    })
    .finally(() => {
      setLoading(false);
    });
}