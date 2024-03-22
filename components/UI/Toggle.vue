<script setup lang="ts">
const model = defineModel();
defineProps({
  icons: {
    type: Array<string>,
    default: () => [],
    validator: (value: string[]) => {
      return value.length === 2;
    },
  },
});
const emit = defineEmits(["change"]);
</script>

<template>
  <label
    class="relative inline-flex cursor-pointer items-center justify-center"
  >
    <input
      type="checkbox"
      class="peer sr-only"
      v-model="model"
      @change="emit('change', ($event?.target as HTMLInputElement)?.value)"
    />
    <div
      class="peer relative h-5 w-10 rounded-full bg-gray-200 outline-none ring-1 ring-gray-300 transition-all duration-200 hover:ring-gray-400 dark:bg-gray-800 dark:ring-gray-700"
    />
    <div
      class="absolute start-[2px] top-[2px] h-4 w-4 rounded-full border border-white bg-white transition-all duration-300 peer-checked:translate-x-5 dark:border-gray-800 dark:bg-black rtl:-translate-x-full"
    />
    <Icon
      v-if="icons.length === 2"
      :name="icons[0]"
      class="absolute start-[3px] top-[3px] text-sm text-black transition-all duration-300 peer-checked:translate-x-full peer-checked:opacity-0 rtl:translate-x-full"
    />
    <Icon
      v-if="icons.length === 2"
      :name="icons[1]"
      class="absolute start-[9px] top-[3px] text-sm text-white opacity-0 transition-all duration-300 peer-checked:translate-x-full peer-checked:opacity-100 rtl:peer-checked:translate-x-full"
    />
  </label>
</template>
