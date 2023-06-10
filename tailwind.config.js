/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   // content: ["./src/**/*.{html,js}"],
//   // content: [
//   //   "./src/**/*.{html,js}",
//   //   "./node_modules/tw-elements/dist/js/**/*.js"
//   // ],
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/tw-elements/dist/js/**/*.js"
// ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui"),require("tw-elements/dist/plugin.cjs")],
//   darkMode: "class",
//   daisyui: {
//     themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
//   },
// }