# drayuleimaperez
Nuevo Sitio Web para la Doctora Yuleima Pérez. Creado con:

- Relume
- React
- Node v22.13.0

# Pasos de Utilizacion

``npm i @relume_io/relume-ui @relume_io/relume-tailwind``

Update Tailwind Config:

```
// Tailwind.config.js
module.exports = {
  content: ["./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"],
  presets: [require("@relume_io/relume-tailwind")],
};
```
