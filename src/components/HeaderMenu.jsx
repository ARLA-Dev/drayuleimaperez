import { useState } from "react";

const HeaderMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }

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
            <p className="uppercase hidden md:block text-xl">Dra. Yuleima Pérez</p>
          </a>

          {/* Hamburger Menu */}
          <ul className="sm:hidden flex flex-col gap-1 cursor-pointer " onClick={toggleMenu}>
            <li>
              <span className={`before:block before:w-[20px] before:h-[2px] before:bg-negro ${isOpen ? "before:rotate-45 before:transform before:translate-y-[11px]" : "before:rotate-0"}`}></span>
            </li>
            <li>
              <span className={`before:block before:w-[20px] before:h-[2px] before:bg-negro ${isOpen ? "before:opacity-0" : "before:opacity-100"}`}></span>
            </li>
            <li>
              <span className={`before:block before:w-[20px] before:h-[2px] before:bg-negro ${isOpen ? "before:-rotate-45" : "before:rotate-0"}`}></span>
            </li>
          </ul>
        </div>

        {/* Navigation Bar */}
        <nav className={`${isOpen ? "block h-full opacity-100" : "hidden h-0  opacity-0 sm:opacity-100 sm:h-full sm:block"} flex-1 max-w-[600px] text-center sm:items-center sm:grid`}>
          <ul className="uppercase text-azul grid grid-cols-1 sm:grid-cols-3 gap-3 lg:grid-cols-6 text-sm md:text-base">
            <li>
              <a className="hover:border-b-rosado hover:border-b-2" href="#">
                Inicio
              </a>
            </li>
            <li>
              <a className="hover:border-b-rosado hover:border-b-2" href="#">
                Sobre Mí
              </a>
            </li>
            <li>
              <a className="hover:border-b-rosado hover:border-b-2" href="#">
                Servicios
              </a>
            </li>
            <li>
              <a className="hover:border-b-rosado hover:border-b-2" href="#">
                Galería
              </a>
            </li>
            <li>
              <a className="hover:border-b-rosado hover:border-b-2" href="#">
                Horario
              </a>
            </li>
            <li>
              <a className="hover:border-b-rosado hover:border-b-2" href="#">
                Ubicación
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMenu;
