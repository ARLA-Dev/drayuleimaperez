import { useState } from "react";
import HamburguerMenu from "./HamburguerMenu";
import NavBar from "./NavBar";

const Links = [
  {
    name: "Inicio",
    link: "/",
  },
  {
    name: "Sobre Mí",
    link: "#",
  },
  {
    name: "Servicios",
    link: "#",
  },
  {
    name: "Galería",
    link: "#",
  },
  {
    name: "Horario",
    link: "#",
  },
  {
    name: "Ubicación",
    link: "#",
  },
];

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-blanco font-Signika py-2">
      <div className="my-container flex justify-between items-center flex-col md:flex-row">
        <div className="flex items-center justify-between w-[90%] md:w-auto">
          <a href="/" className="flex items-center font-bold text-rosado gap-3">
            <img
              src={"/img/logo.png"}
              alt="Logo Dra. Yuleima Perez"
              className="w-[70px] h-[70px]"
            />
            <p className="uppercase hidden sm:block text-xl">
              Dra. Yuleima Pérez
            </p>
          </a>

          {/* Hamburger Menu */}
          <HamburguerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>

        {/* Navigation Bar */}
        <NavBar isOpen={isOpen} Links={Links} />
      </div>
    </div>
  );
};

export default HeaderMenu;
