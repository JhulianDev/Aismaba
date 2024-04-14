import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { API_URL } from '../env/env';
import axios from "axios"

const useUserStore = create(
  persist(
    (set, get) => ({
      userData: null,
      setUserData: (data) => {
        set({ userData: data })
      },
      deleteUserData: () => {
        set({ userData: null })
      },

      userToken: null,
      setUserToken: (token) => {
        set({ userToken: token })
      },
      deleteUserToken: () => {
        set({ userToken: null })
      },

      loadUserData: (setUserData) => {
        const userToken = get().userToken;
        if (userToken) {
          axios.get(`${API_URL}/user`, {
            headers: {
              Authorization: `Bearer ${userToken}`
            }
          })
            .then((resp) => {
              setUserData(resp.data.user)
            })
            .catch((error) => {
              console.error(`Error al obtener el usuario: ${error}`);
            });
        }
      },

      redirectToCart: false,
      setRedirectToCart: (boolean) => {
        set({ redirectToCart: boolean })
      },
    }),
    {
      name: 'user-storage'
    }
  )
);

useUserStore.getState().loadUserData(useUserStore.getState().setUserData);

export default useUserStore;