import { TOKEN_NAME } from "../env/env";

// Obtener token del local storage
export const getToken = () => {
  return localStorage.getItem(TOKEN_NAME)
}

// Setear Token en el local storage
export const setToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token)
}

// Eliminar Token del local storage
export const deleteToken = () => {
  localStorage.removeItem(TOKEN_NAME)
}

// Limpiar Local Storage
export const clearLocal = () => {
  localStorage.clear()
}