/** @type {import('tailwindcss').Config} */
export default {
  important: true,
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
      colors: {
        primary: "#CC0001",
        secondary: "#FF0000",
        "global-bg": "#e5e5e5",
        "global-text": "#272727",
        sideBar: "#272727",
      },
    },
  },
  plugins: [],
};
