export const NavLink = ({ href, text, isOpen }) => {
  return (
    <li>
      <a className={`hover:border-b-rosado hover:border-b-2 ${isOpen ? "" : "text-[0px]"}`} href={href}>
        {text}
      </a>
    </li>
  );
};
