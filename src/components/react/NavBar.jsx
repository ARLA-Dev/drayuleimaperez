import { NavLink } from "./NavLink";

const NavBar = ({ isOpen, Links }) => {
  return (
    <nav
      className={`${
        isOpen
          ? "animate-fadeIn h-full max-h-[600px] opacity-100 duration-500"
          : "animate-fadeOut h-0 max-h-0 opacity-0 duration-[250ms]"
      } md:opacity-100 md:h-auto md:max-h-full flex-1 max-w-[600px] text-center md:items-center md:grid`}
    >
      <ul
        className={`uppercase text-azul grid grid-cols-1 md:grid-cols-3 gap-3 lg:grid-cols-6 text-sm md:text-base ${
          isOpen ? "opacity-100" : "opacity-0"
        } md:opacity-100`}
      >
        {Links.map((link) => (
          <NavLink key={link.name} href={link.link} text={link.name} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;