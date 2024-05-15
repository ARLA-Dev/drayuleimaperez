import { NavLink } from "./NavLink";

const NavBar = ({ isOpen, Links }) => {
  return (
    <nav
      className={`${
        isOpen
          ? "animate-fadeIn h-full max-h-[600px] opacity-100 duration-500"
          : "animate-fadeOut h-0 max-h-0 opacity-0 duration-[250ms]"
      } sm:opacity-100 sm:h-auto sm:max-h-full flex-1 max-w-[600px] text-center sm:items-center sm:grid`}
    >
      <ul
        className={`uppercase text-azul grid grid-cols-1 sm:grid-cols-3 gap-3 lg:grid-cols-6 text-sm md:text-base ${
          isOpen ? "opacity-100" : "opacity-0"
        } sm:opacity-100`}
      >
        {Links.map((link) => (
          <NavLink key={link.name} href={link.link} text={link.name} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
