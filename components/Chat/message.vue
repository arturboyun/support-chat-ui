<script setup lang="ts">
defineProps({
  message: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});
const randomColor = ref("#fcba03");

const generateRandomColor = () => {
  const colors = ["#fcba03", "#03fcba", "#ba03fc", "#fc03ba", "#03bafc"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};

onMounted(() => {
  randomColor.value = generateRandomColor();
});
</script>

<template>
  <div class="flex flex-col items-start">
    <div class="w-auto rounded-lg bg-gray-600 px-6 py-2 pl-4 dark:bg-gray-800">
      <div
        class="text-lg font-bold text-black dark:text-white"
        :style="{ color: randomColor }"
      >
        {{ username }}
      </div>
      {{ message }}
    </div>
  </div>
</template>
