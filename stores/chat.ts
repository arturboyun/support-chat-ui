import { defineStore } from "pinia";

export const useChatStore = defineStore({
  id: "chat",
  state: () => ({
    messages: [
      { text: "Hello", username: "Alice" },
      { text: "Hi", username: "Bob" },
    ] as Message[],
  }),
  getters: {
    messageCount: (state) => state.messages.length,
  },
  actions: {
    async addMessage(message: Message) {
      this.messages.push(message);
      return true;
    },
    async clearMessages() {
      this.messages = [];
    },
  },
});
