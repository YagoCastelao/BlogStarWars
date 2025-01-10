# Star Wars Blog

![Badge de Tecnologías](https://img.shields.io/badge/React-v18-blue?style=flat-square&logo=react)![Badge de Tecnologías](https://img.shields.io/badge/Vite-v4-purple?style=flat-square&logo=vite)

¡Bienvenido a **Star Wars Blog**! Esta es una aplicación web desarrollada con **React**, **Vite**, utilizando la **SWAPI** (Star Wars API) para mostrar información sobre personajes, planetas y vehículos del universo de Star Wars. La aplicación te permite visualizar detalles de los elementos, agregarlos a tus favoritos y explorar el universo de Star Wars.

![Star Wars Logo](https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG12.png)

## Funcionalidades

- **Visualización de Personajes, Planetas y Vehículos**: Navega por un conjunto de personajes, planetas y vehículos disponibles a través de la SWAPI.
- **Favoritos**: Agrega elementos a tus favoritos con un simple clic en el corazón.
- **Detalles**: Haz clic en "Leer más" para ver información detallada sobre cualquier personaje, planeta o vehículo.
- **Diseño Responsivo**: La aplicación usa Bootstrap para un diseño responsivo.
- **Tema Star Wars**: El diseño está inspirado en el tema visual de Star Wars, con imágenes y colores del universo Star Wars.

## Tecnologías Utilizadas

- **React**: La librería JavaScript.
- **React Router**: Para la navegación entre las páginas.
- **Vite**: Herramienta de construcción rápida.
- **Context API**: Para gestionar el estado de los favoritos.
- **Fetch API**: Para hacer las peticiones a la SWAPI.
- **Bootstrap**: Para la estilización y diseño responsivo.

## Requisitos Previos

Antes de comenzar, necesitas tener instalado:

- [Node.js](https://nodejs.org/)
- [NPM o Yarn](https://www.npmjs.com/)

## Cómo Ejecutar el Proyecto ⚙️

1. Clona el Repositorio
   ```bash
   git clone https://github.com/tu-usuario/BlogStarwars.git
   
2. Instala las Dependencias
Ingresa en el directorio del proyecto e instala las dependencias:
   ```bash
   cd starwars-blog
   npm install
   
3. Ejecuta el Proyecto
Ahora, ejecuta el proyecto con el siguiente comando:
   ```bash
   npm run dev

Estructura del Proyecto
El proyecto tiene la siguiente estructura de archivos:
```bash
/starwars-blog
│
├── /public                 # Archivos públicos
│
├── /src                    # Código fuente de la aplicación
│   ├── /components         # Componentes de la aplicación (Navbar, Home, Details)
│   ├── /context            # Contexto para gestionar los favoritos
│   ├── App.jsx             # Componente principal de la aplicación
│   └── main.jsx            # Archivo de inicialización
│
├── package.json            # Dependencias y scripts del proyecto
└── README.md               # Documentación del proyecto
