# Aplicación Gestión Fitness – Frontend

PWA para la gestión de Personal Trainers y sus alumnos, desarrollada con React, TypeScript y Vite.

## Requisitos

- Node.js 20.19 o superior

## Instalación

```
npm install
```

## Comandos

| Comando | Para qué sirve |
|---|---|
| `npm run dev` | Levanta la app en modo desarrollo en `http://localhost:5173` |
| `npm test` | Corre las pruebas con Vitest y queda vigilando cambios |
| `npx vitest run` | Corre las pruebas una sola vez |
| `npm run build` | Genera la versión de producción en `dist/`, con el service worker de la PWA |
| `npm run preview` | Sirve la versión de producción en `http://localhost:4173` para probar la instalación como PWA |

## Estructura

El código se organiza por funcionalidad (ver DT-04 en el repositorio del backend):

- `src/app/`: componente principal y rutas.
- `src/features/`: una carpeta por funcionalidad (auth, home, students, routines, schedule, payments).
- `src/shared/`: código compartido: cliente de la API, componentes comunes y estilos.