<script setup lang="ts">
const userMenuIsOpen = ref(false);

const profileLinks = [
  { name: "Sign In", to: "/login" },
  { name: "Sign Up", to: "/signup" },
  { name: "Creator in Telegram", to: "https://arturboyun.t.me" },
];
</script>

<template>
  <header class="bg-white dark:border-b-2 dark:border-gray-800 dark:bg-black">
    <nav
      class="mx-auto flex max-w-2xl items-center justify-between px-6 py-2 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <Icon
            name="fe:paper-plane"
            class="h-8 w-8 text-gray-900 dark:text-white"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>
      <div class="relative flex flex-1 justify-end">
        <button
          @click="userMenuIsOpen = !userMenuIsOpen"
          class="flex h-8 w-8 items-center justify-center rounded-full leading-6"
          :class="{
            'outline-none ring-2 ring-gray-800 ring-offset-gray-800 dark:ring-gray-800':
              userMenuIsOpen,
          }"
        >
          <Icon
            name="fe:user"
            class="h-6 w-6 text-gray-900 dark:text-white"
            aria-hidden="true"
          />
        </button>
        <Transition>
          <div
            v-if="userMenuIsOpen"
            class="absolute right-3.5 top-10 z-20 mt-2 flex w-56 flex-col space-y-2 rounded-md bg-white p-2 shadow-lg dark:border-2 dark:border-gray-800 dark:bg-black dark:text-white"
          >
            <NuxtLink
              v-for="(link, index) in profileLinks"
              :key="index"
              :to="link.to"
              class="rounded-sm p-1 px-2 hover:bg-gray-800"
            >
              {{ link.name }}</NuxtLink
            >
          </div>
        </Transition>
      </div>
    </nav>
  </header>
</template>

<style>
.v-enter-active,
.v-leave-active {
  @apply transition-all;
  @apply duration-300;
}

.v-enter-from,
.v-leave-to {
  @apply translate-x-10;
  @apply opacity-0;
}
</style>
