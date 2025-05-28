Documento Fundacional del Proyecto: Guaroduino STEAM Venezuela (Revisión con Autenticación)
1. Nombre del Proyecto
Guaroduino STEAM Venezuela

2. Objetivo Principal
Desarrollar una plataforma web educativa, con un diseño minimalista y optimizada para móviles, que sirva como centro para promover la educación STEAM en Venezuela. La plataforma ofrecerá secciones públicas informativas y requerirá registro e inicio de sesión para acceder a funcionalidades clave como una herramienta interactiva de simulación de robots y proyectos, y el contenido completo de proyectos y recursos educativos.

3. Principios de Diseño y Experiencia de Usuario (UX)
Estos principios guiarán todas las decisiones de diseño y desarrollo:

A. Minimalismo Funcional:

Interfaz limpia, organizada y sin distracciones.
Cada elemento visual y funcional tendrá un propósito claro.
Se evitará la sobrecarga de información y elementos decorativos innecesarios.
B. Mobile-First y Responsividad:

Diseño y desarrollo comenzarán con la experiencia móvil (especialmente Android) como prioridad.
La estructura será inherentemente responsiva, adaptándose a tablets y ordenadores de escritorio.
C. Alta Legibilidad y Contraste:

Fondo Principal: Blanco (#FFFFFF).
Texto Principal: Negro (#000000).
Color de Énfasis (Acento): Azul Eléctrico (propuesta: #007FFF).
Atención a los ratios de contraste WCAG para accesibilidad.
D. Jerarquía Visual Clara:

Tipografía: Uso estratégico de tamaños, grosores y posiblemente familias de fuentes complementarias.
Espaciado (Whitespace): Uso intencional y generoso para mejorar la organización y reducir la carga cognitiva.
Agrupación Lógica: Elementos relacionados agrupados visualmente.
E. Navegación Intuitiva y Gestión de Acceso:

Menú de navegación principal sencillo, claro y predecible, adaptándose al estado de autenticación del usuario (mostrando opciones diferentes para usuarios anónimos y registrados).
Flujos claros para Registro, Inicio de Sesión, y Recuperación de Contraseña.
Indicadores claros de la ubicación actual del usuario y fácil acceso a la gestión de su perfil y opción de cerrar sesión cuando esté autenticado.
En dispositivos móviles, se considerará un menú tipo "hamburguesa".
F. Acceso Seguro y Personalizado (Nuevo):

Implementación de un sistema de autenticación robusto para proteger los datos del usuario y el contenido privado.
Diferenciación clara entre contenido público y contenido accesible solo para usuarios registrados.
Posibilidad de que los usuarios gestionen su propia información de perfil y accedan a contenido o funcionalidades personalizadas (ej. proyectos guardados en el simulador).
4. Estructura del Sitio Web y Acceso de Usuarios
La plataforma se dividirá en secciones públicas y privadas:

A. Funcionalidades y Páginas Relacionadas con la Cuenta de Usuario:
Página de Registro de Nuevos Usuarios.
Página de Inicio de Sesión (Login).
Mecanismo de Recuperación de Contraseña.
Perfil de Usuario (accesible tras iniciar sesión, para ver/editar datos, gestionar proyectos guardados, etc.).
Funcionalidad de Cerrar Sesión (Logout).
B. Secciones Públicas (Accesibles sin iniciar sesión):
1. Inicio:
Página de bienvenida, introducción a Guaroduino STEAM Venezuela.
Llamados a la acción claros para registrarse o explorar el contenido público.
2. Proyectos (Vista Previa/Limitada):
Una selección o resumen de proyectos para mostrar el tipo de contenido disponible.
Podría incluir descripciones generales y objetivos de los niveles (Nivel I, II, III) pero no el acceso completo a los detalles o materiales, incentivando el registro.
3. Recursos (Vista Previa/Limitada):
Una selección de artículos, guías o enlaces públicos.
Acceso limitado al catálogo completo de recursos, con invitación a registrarse para más.
4. Más Información:
Sobre Nosotros: Misión, visión, historia.
Comunidad: Cómo involucrarse (públicamente), información general.
Contacto: Formulario o información de contacto pública.
C. Secciones Privadas (Requieren inicio de sesión):
1. Simulador (Acceso Completo):
Herramienta interactiva completa.
Sub-secciones / Vistas de la herramienta:
Simulación
Editor de Código
Editor de Proyecto
Editor de Ambiente
Posibilidad de guardar y cargar proyectos del usuario.
2. Proyectos (Acceso Completo):
Acceso total a todos los proyectos y sus detalles en todos los niveles (Nivel I, II, III).
Materiales completos, guías paso a paso, código fuente, etc.
3. Recursos (Acceso Completo):
Catálogo completo de artículos, guías, tutoriales, herramientas y material descargable exclusivo para usuarios registrados.
4. Perfil de Usuario y Contenido Personalizado:
Gestión de la información de la cuenta.
Acceso a proyectos guardados en el simulador.
Posiblemente, seguimiento del progreso (a futuro).