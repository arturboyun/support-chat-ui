/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      ringWidth: {
        1: "1px",
      },
      maxHeight: {
        775: "775px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
