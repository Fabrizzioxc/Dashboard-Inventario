/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",  // Escanea archivos HTML y TypeScript
    "./node_modules/flowbite/**/*.js", // Agrega Flowbite a la configuración
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Activa los componentes de Flowbite
  ],
};
