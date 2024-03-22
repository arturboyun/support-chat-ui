<script setup lang="ts">
const chatStore = useChatStore();

const socket = ref<WebSocket | null>(null);

const scrollToBottom = async () => {
  const chat = document.getElementById("chat");
  if (!chat) return;
  chat.scrollTo(0, chat.scrollHeight);
  chat.scrollTop = chat.scrollHeight;
};

onMounted(async () => {
  socket.value = new WebSocket("ws://localhost:8000/ws/arturboyun");
  socket.value.onopen = () => {
    console.log("Connected to the server");
  };
  socket.value.onmessage = async (event) => {
    try {
      const message = JSON.parse(event.data);
      const result = await chatStore.addMessage(message);
      if (result) {
        scrollToBottom();
      }
    } catch (e) {}
  };
  socket.value.onclose = () => {
    console.log("Disconnected from the server");
  };
  scrollToBottom();
});

const message = ref("");

const sendMessage = () => {
  if (socket.value?.readyState === WebSocket.OPEN && message.value !== "") {
    socket.value.send(
      JSON.stringify({
        text: message.value,
      }),
    );
  }
};
</script>

<template>
  <div
    class="container relative mx-auto flex max-w-2xl flex-col items-stretch justify-between px-6 py-2 lg:px-8"
    :style="{ 'max-height': 'calc(100vh - 120px)' }"
  >
    <div id="chat" class="space-y-4 overflow-auto">
      <ChatMessage
        v-for="(message, index) in chatStore.messages"
        :key="index"
        :message="message.text"
        :username="message.username"
      />
    </div>
    <ChatInput v-model="message" @message="sendMessage" />
  </div>
</template>
