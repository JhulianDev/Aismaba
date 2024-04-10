import Swal from "sweetalert2"

export const handleOrder = () => {

  // Comprobamos que el usuario haya iniciado sesión
  // Si no inicio sesión lo redirigimos al Login
  if (!userData) {
    Swal.fire({
      icon: "info",
      title: "Atención",
      text: "Para continuar con la compra debe iniciar sesión",
      showConfirmButton: true
    })
    setRequireLogin(true)
    navigate("/login")
    return;
  }
  
}