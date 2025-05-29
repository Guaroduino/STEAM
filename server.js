// Importar el módulo Express
const express = require('express');
// Importar el módulo 'path' para manejar rutas de archivos
const path = require('path');

// Crear una instancia de la aplicación Express
const app = express();

// Definir el puerto en el que escuchará el servidor
const PORT = 3000;

// Definir una ruta GET para la raíz ('/')
// Esta ruta enviará el archivo index.html como respuesta
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Iniciar el servidor y hacerlo escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor súper simple escuchando en http://localhost:${PORT}`);
  console.log('Intenta abrir esta URL en tu navegador.');
  console.log(`Sirviendo el archivo: ${path.join(__dirname, 'views', 'index.html')}`);
});