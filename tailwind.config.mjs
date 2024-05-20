module.exports = {
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".my-container": {
          width: "min(95%, 1200px)",
          margin: "0 auto",
        },
      });
    },
    require("tailwind-hamburgers"),
  ],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", height: "0", maxHeight: "0" },
          "100%": { opacity: "1", height: "auto", maxHeight: "100%" },
        },
        fadeOut: {
          "0%": { opacity: "1", height: "auto", maxHeight: "100%" },
          "100%": { opacity: "0", height: "0", maxHeight: "0" },
        }
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      Signika: ["Signika", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      Montagu: ["Montagu Slab", "sans-serif"],
    },
    colors: {
      azul: "#304472",
      rosado: "#d38db2",
      magenta: "#ab1d6c",
      gris: "#74747c",
      grisClaro: "#d1c5cb",
      blanco: "#fff",
      negro: "#000",
      rosadoClaro: "#f7d0e6",
    },
  },
};
