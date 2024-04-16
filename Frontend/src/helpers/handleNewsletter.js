import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from "../env/env";
import PLANTILLAS_GRATUITAS from "../assets/img/generales/plantillas_gratuitas/image_form.webp"

export const handleSuscription = (e, setLoading, setFormData) => {
  e.preventDefault();
  setLoading(true)

  // Creamos una variable "data" con los datos obtenidos en el formulario
  let data = {
    user_name: e.target.user_name.value,
    email: e.target.email.value,
    country: e.target.country.value
  };

  // Enviamos una peticion POST al backend con la data del formulario
  axios.post(`${API_URL}/newsletter_suscription`, data)
    // Si la respuesta es positiva:
    .then(response => {
      // Mostramos una alerta con el mensaje de existo
      Swal.fire({
        icon: "success",
        title: "Felicidades",
        text: "Disfruta de tus plantillas!",
        showConfirmButton: false,
        timer: 1600
      });
      // Limpiamos los inputs
      setFormData({ user_name: "", email: "", country: "" });
      // Activamos la descarga del archivo
      const downloadLink = document.createElement("a");
      downloadLink.href = PLANTILLAS_GRATUITAS;
      downloadLink.download = "Aismaba_Plantillas-gratuitas";
      downloadLink.click();

    })
    // Si la respuesta es negativa
    .catch(error => {
      // Mostramos una alerta con el mensaje de error
      Swal.fire({
        icon: "info",
        title: "Atención",
        text: error.response.data.message
      });
    })
    .finally(() => {
      setLoading(false); // Set loading to false in any case (success or error)
    });
};
