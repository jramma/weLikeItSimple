# weLikeItSimple

**weLikeItSimple** es un proyecto que utiliza tecnologías modernas de desarrollo web para crear interfaces sencillas y eficientes.

## Tecnologías utilizadas

- **Tailwind CSS**: Un framework de CSS que facilita la creación de diseños responsivos y modernos mediante clases utilitarias.
- **PostCSS**: Una herramienta para transformar estilos CSS mediante plugins, permitiendo funcionalidades como el uso de variables y mixins.
- **PostHTML**: Un procesador de HTML que permite modificar y optimizar el código HTML utilizando plugins.

## Estructura del proyecto

- `src/`: Directorio que contiene el código fuente del proyecto.
- `.browserslistrc`: Configuración de los navegadores objetivo para la compatibilidad del proyecto.
- `.editorconfig`: Configuración para mantener estilos de codificación consistentes entre diferentes editores.
- `.gitignore`: Especifica los archivos y directorios que deben ser ignorados por Git.
- `.htmlnanorc`, `.postcssrc`, `.posthtmlrc`: Archivos de configuración para las herramientas HTMLNano, PostCSS y PostHTML, respectivamente.
- `.nvmrc`: Especifica la versión de Node.js utilizada en el proyecto.
- `package.json`: Archivo que contiene información del proyecto y las dependencias necesarias.
- `tailwind.config.js`: Archivo de configuración para Tailwind CSS.

## Instalación y uso

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/jramma/weLikeItSimple.git
   ```

2. **Instalar las dependencias**:

   Navega al directorio del proyecto e instala las dependencias utilizando npm o yarn:

   ```bash
   cd weLikeItSimple
   npm install
   # o
   yarn install
   ```

3. **Iniciar el proyecto**:

   Ejecuta el siguiente comando para iniciar el entorno de desarrollo:

   ```bash
   npm start
   # o
   yarn start
   ```

   Esto iniciará un servidor de desarrollo y podrás ver el proyecto en tu navegador en `http://localhost:3000`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Envía tus cambios al repositorio remoto (`git push origin feature/nueva-funcionalidad`).
5. Abre una pull request para que tus cambios sean revisados.
