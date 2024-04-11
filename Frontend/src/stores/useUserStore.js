import { create } from 'zustand'
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set, get) => ({
      userData: {},
      setUserData: (data) => {
        set({ userData: data })
      },

      userToken: "",
      setUserToken: (token) => {
        set({ userToken: token })
      },

      loadUserData: () => {
        const userToken = get().userToken;
        if (userToken) {
          console.log(userToken)
        } else {
          console.log("No user token")
        }
      },
      //   const userToken = get().userToken;
      //   if (userToken) {
      //     axios.get(`${API_URL}/user`, {
      //       headers: {
      //         Authorization: `Bearer ${userToken}`
      //       }
      //     })
      //       .then((resp) => {
      //         setUserData(resp.data.user)
      //       })
      //       .catch((error) => {
      //         console.error(`Error al obtener el usuario: ${error.response.data.message}`);
      //       });
      //   }
      // },

      requiresLogin: false,
      setRequiresLogin: (isLoginRequired) => {
        set({ requiresLogin: isLoginRequired })
      },

      setConsole: (console.log("Hola"))
    }),
    {
      name: 'user-storage'
    }
  )
);

useUserStore.getState().loadUserData();

export default useUserStore;