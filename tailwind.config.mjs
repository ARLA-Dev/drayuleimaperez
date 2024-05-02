module.exports = {
  plugins: [],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    fontFamily: {
	  Signika: ["Signika", "sans-serif"],
	  Roboto: ['Roboto"', "sans-serif"], 
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
    },
  },
};
