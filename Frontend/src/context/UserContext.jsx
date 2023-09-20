import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { getToken } from "../helpers/token"
import { API_URL } from "../env/env"

const UserContext = createContext()

const UserProvider = ({ children }) => {

  const [userData, setUserData] = useState()

  useEffect(() => {
    if (getToken()) {
      axios.get(`${API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
        .then((resp) => {
          setUserData(resp.data.user)
        })
        .catch((error) => {
          console.error(`Error al obtener el usuario: ${error.response.data.message}`);
        });
    }
  }, [])

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }