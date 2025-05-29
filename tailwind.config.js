/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.html",    // Para todos los archivos HTML en la carpeta views
    "./public/js/**/*.js"  // Si vas a usar JS para manipular clases de Tailwind
  ],
  theme: {
    extend: {
      colors: {
        'azul-electrico': '#007FFF', // Definimos nuestro azul eléctrico
      }
    },
  },
  plugins: [],
} 