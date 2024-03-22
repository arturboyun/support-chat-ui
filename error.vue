<script setup lang="ts">
const error = useError();
const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <NuxtLayout name="default">
    <div
      class="flex h-screen items-center justify-center bg-white dark:bg-black"
    >
      <div
        class="rounded-lg bg-black p-8 shadow-lg dark:border-2 dark:border-gray-800"
      >
        <h1 class="mb-4 text-4xl font-bold text-white">
          Oops! {{ error?.statusCode }}
        </h1>
        <p class="mb-8 text-lg text-gray-300">
          {{
            error?.statusCode === 404
              ? "The page you are looking for does not exist."
              : "Something went wrong."
          }}
        </p>
        <button
          @click="goBack"
          class="flex items-center justify-center rounded bg-blue-500 py-2 pl-2 pr-3 text-white hover:bg-blue-600"
        >
          <Icon name="fe:arrow-left" class="mr-2 h-5 w-5" aria-hidden="true" />
          Go Back
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
