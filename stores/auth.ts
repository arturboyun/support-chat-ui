import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    login() {
      // Send login request
      // Receive User data
      // Save access token
      const localStorage = useLocalStorage();
      localStorage.set("user", { name: "John Doe" });
    },
    register(username: string, password: string) {},
    logout() {
      this.user = null;
    },
  },
});
