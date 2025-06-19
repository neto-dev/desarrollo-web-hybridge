# Arquitectura de Componentes con React 🚀

Este proyecto introduce la arquitectura basada en componentes utilizando React y Tailwind CSS, con enfoque en los principios **DRY** (_Don't Repeat Yourself_) y **KISS** (_Keep It Simple, Stupid_), para construir aplicaciones web modernas, eficientes y reutilizables.

## 🧱 Objetivos

- Comprender qué es React y su arquitectura basada en componentes.
- Aplicar los principios DRY y KISS para escribir código limpio y mantenible.
- Crear componentes reutilizables con props, variantes y estilos dinámicos.

## ⚙️ Stack Tecnológico

- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) como empaquetador rápido
- [Tailwind CSS](https://tailwindcss.com/) para estilos utilitarios

## 🚧 Instalación rápida

```bash
npm create vite@latest mi-app-react -- --template react-ts
cd mi-app-react
npm install
npm install tailwindcss @tailwindcss/vite --save
```

Configura Tailwind en `vite.config.ts` y `index.css`, luego ejecuta:

```bash
npm run dev
```

## 🧩 Componentes

Se implementa un componente `Button` con soporte para variantes:

```tsx
<Button>Primario</Button>
<Button variant="outline">Secundario</Button>
<Button variant="destructive">Peligro</Button>
```

Props soportadas:

- `variant`: `"primary"` (por defecto), `"outline"`, `"destructive"`
- `children`: contenido del botón

## 📁 Estructura básica

```
mi-app-react/
├── src/
│   ├── components/
│   │   └── Button.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
└── vite.config.ts
```

## 💡 Principios aplicados

- **DRY**: evita duplicar lógica, reutiliza funciones y componentes.
- **KISS**: mantén el código simple, claro y directo.

---

> React es la librería más usada en desarrollo web. Aprender a estructurar proyectos con componentes es esencial para trabajar profesionalmente en frontend.
