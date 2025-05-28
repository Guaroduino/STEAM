Principios Generales:
Claridad sobre Astucia: El código debe ser fácil de entender. Evitar construcciones excesivamente complejas si una solución más simple es posible.
DRY (Don't Repeat Yourself): Evitar la duplicación de código mediante funciones, módulos o clases reutilizables.
Principio de Responsabilidad Única (SRP): Cada función, clase o módulo debe tener una única responsabilidad bien definida.
Comentarios en Español: Todo el código debe estar comentado en español, explicando el por qué o la lógica compleja, no solo el qué (si el código ya es autoexplicativo).
1. Nomenclatura (Naming Conventions):
Variables y Funciones: Usar camelCase (ej: nombreUsuario, calcularTotalImpuesto).
Clases y Constructores: Usar PascalCase (o UpperCamelCase) (ej: ServicioDeAutenticacion, ControladorDeProyecto).
Constantes: Usar UPPER_CASE_SNAKE_CASE (ej: MAX_INTENTOS_LOGIN, URL_BASE_API).
Archivos: Usar kebab-case (ej: servicio-autenticacion.js, controlador-proyecto.js) o camelCase / PascalCase si son clases. Ser consistente.
Nombres Descriptivos: Usar nombres que indiquen claramente el propósito de la variable, función o clase, preferiblemente en español.
2. Formato del Código:
Indentación: Usar 2 espacios para la indentación (o 4, elige uno y sé consistente).
Punto y Coma: Usar punto y coma al final de las declaraciones.
Espaciado:
Espacios alrededor de operadores (=, +, -, *, /, etc.).
Espacio después de las comas.
Líneas en blanco para separar bloques lógicos de código y mejorar la legibilidad.
Longitud de Línea: Mantener las líneas de código con una longitud máxima de 100-120 caracteres para evitar el scroll horizontal.
Llaves ({}): Para bloques if, for, while, funciones, etc., colocar la llave de apertura en la misma línea que la declaración y la de cierre en una nueva línea.
JavaScript

if (condicion) {
  // código
}
3. Modularidad:
Módulos ES6: Usar import y export para la modularización del código JavaScript.
Archivos Pequeños y Enfocados: Dividir la lógica en múltiples archivos pequeños en lugar de archivos monolíticos.
Para Express.js: separar rutas, controladores, servicios (lógica de negocio), y modelos (si aplica) en sus propias carpetas/archivos.
Funciones Puras: Siempre que sea posible, escribir funciones puras (aquellas que para la misma entrada siempre devuelven la misma salida y no tienen efectos secundarios).
4. Comentarios (en Español):
Comentarios de Bloque/Múltiples Líneas: Para explicaciones generales o para comentar secciones de código.
JavaScript

/*
 * Esta sección maneja la validación de los datos de entrada del usuario
 * antes de procesar el formulario de registro.
 */
Comentarios de una Sola Línea: Para aclaraciones cortas.
JavaScript

const TASA_IMPUESTO = 0.16; // Impuesto al valor agregado estándar en Venezuela
JSDoc para Funciones y Clases: Documentar el propósito, parámetros y valor de retorno de funciones y métodos importantes.
JavaScript

/**
 * Envía un correo electrónico de bienvenida al nuevo usuario.
 * @param {string} emailUsuario - La dirección de correo electrónico del usuario.
 * @param {string} nombreUsuario - El nombre del usuario para personalizar el correo.
 * @returns {Promise<boolean>} Promesa que resuelve a true si el correo se envió con éxito, false en caso contrario.
 * @throws {Error} Si los parámetros de entrada no son válidos.
 */
async function enviarCorreoBienvenida(emailUsuario, nombreUsuario) {
  // ... lógica para validar parámetros y enviar correo
}
Evitar Comentarios Obvios: No comentar código que es evidente por sí mismo.
JavaScript

// MAL:
// Incrementa la variable i en 1
// i++;

// BIEN: (si es necesario explicar el propósito del bucle)
// Iteramos sobre los proyectos para actualizar su estado
for (let i = 0; i < proyectos.length; i++) {
  // ...
}
5. Manejo de Errores:
Usar try...catch para el manejo de errores síncronos.
Para código asíncrono (Promises), usar .catch() o try...catch con async/await.
Proporcionar mensajes de error claros y descriptivos.
En Express.js, utilizar middleware de manejo de errores centralizado.
6. Prácticas Adicionales:
Evitar el uso de var, preferir let y const.
Utilizar arrow functions (=>) donde sea apropiado, especialmente para callbacks y mantener el contexto de this.
Desestructuración de objetos y arrays para mejorar la legibilidad.
2. Cómo Comunicar estos Estándares a Cursor AI:

Referenciar el Archivo en Prompts:
"Genera una función para validar el formulario de registro de usuarios. Sigue las directrices de @CODING_STANDARDS.md, especialmente en cuanto a nomenclatura, modularidad y comentarios JSDoc en español."
"Refactoriza este código del controlador de proyectos para que cumpla con el Principio de Responsabilidad Única y los estándares de formato definidos en @CODING_STANDARDS.md."
Incluirlo en el Contexto del Workspace: Si Cursor lo permite, añade CODING_STANDARDS.md al contexto del proyecto.
Prompts Específicos sobre Estilo:
"Asegúrate de que todas las variables en este bloque de código usen camelCase y los comentarios estén en español."
"Revisa esta función y añade comentarios JSDoc en español para todos los parámetros y el valor de retorno."
Uso de Linters y Formatters (ESLint y Prettier):
Configuración: Puedes pedirle a Cursor AI que te ayude a configurar ESLint y Prettier en tu proyecto.
"Ayúdame a configurar ESLint para este proyecto Node.js. Quiero usar el style guide de Airbnb (o StandardJS, o uno personalizado basado en mis CODING_STANDARDS.md) y que fuerce comentarios JSDoc para funciones exportadas. Configúralo para que entienda ES2020+."
"Configura Prettier en este proyecto para usar 2 espacios de indentación, punto y coma, y una longitud de línea máxima de 100 caracteres."
Aplicación: Una vez configurados, Cursor (o extensiones dentro de él) a menudo puede formatear o señalar problemas automáticamente. También puedes pedirle:
"Formatea este archivo según la configuración de Prettier del proyecto."
"Analiza este código con ESLint y ayúdame a corregir los errores."