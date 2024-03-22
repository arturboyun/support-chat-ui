<script setup lang="ts">
const emit = defineEmits(["message"]);
const model = defineModel({ required: true, type: String });
const sendMessage = () => {
  if (model.value === "") return;
  emit("message", model.value);
  model.value = "";
};
</script>

<template>
  <div
    class="fixed bottom-5 left-1/2 w-full max-w-2xl -translate-x-1/2 px-6 py-2"
  >
    <form
      @submit.prevent="sendMessage"
      class="flex w-full items-center justify-between"
    >
      <input
        type="text"
        v-model="model"
        class="w-full rounded-lg border-2 border-gray-800 p-2 text-black transition duration-300 ease-in-out focus:border-blue-500 focus:outline-none dark:border-gray-800 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500"
        placeholder="Type your message..."
      />
      <button
        type="submit"
        class="absolute right-7 flex items-center justify-center rounded-lg bg-gray-800 p-2.5 transition duration-300 ease-in-out hover:bg-gray-700"
      >
        <Icon
          name="fe:paper-plane"
          class="h-4 w-4 text-blue-500 dark:text-blue-500"
        />
      </button>
    </form>
  </div>
</template>
