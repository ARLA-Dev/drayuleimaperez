export const NavLink = ({ href, text }) => {
  return (
    <li>
      <a className="hover:border-b-rosado hover:border-b-2" href={href}>
        {text}
      </a>
    </li>
  );
};
