import { useState } from "react";

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
      <div className="my-container flex justify-between items-center flex-col sm:flex-row">
        <div className="flex items-center justify-between w-[90%] sm:w-auto">
          <a href="/" className="flex items-center font-bold text-rosado gap-3">
            <img
              src={"/img/logo.png"}
              alt="Logo Dra. Yuleima Perez"
              className="w-[70px] h-[70px]"
            />
            <p className="uppercase hidden md:block text-xl">
              Dra. Yuleima Pérez
            </p>
          </a>

          {/* Hamburger Menu */}
          <div
            className={`sm:hidden tham tham-e-squeeze tham-w-6 ${
              isOpen ? "tham-active" : ""
            }`}
            onClick={toggleMenu}
          >
            <div className="tham-box">
              <div className="tham-inner" />
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav
          className={`${
            isOpen
              ? "animate-fadeIn h-full max-h-[600px] opacity-100 duration-500"
              : "animate-fadeOut h-0 max-h-0 opacity-0 duration-[250ms]"
          } sm:opacity-100 sm:h-auto sm:max-h-full flex-1 max-w-[600px] text-center sm:items-center sm:grid`}
        >
          <ul className={`uppercase text-azul grid grid-cols-1 sm:grid-cols-3 gap-3 lg:grid-cols-6 text-sm md:text-base ${isOpen ? "opacity-100" : "opacity-0"} sm:opacity-100`}>
            {Links.map((link) => (
              <NavLink key={link.name} href={link.link} text={link.name} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMenu;

const NavLink = ({ href, text }) => {
  return (
    <li>
      <a className="hover:border-b-rosado hover:border-b-2" href={href}>
        {text}
      </a>
    </li>
  );
};
