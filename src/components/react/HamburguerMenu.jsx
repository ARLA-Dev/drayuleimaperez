const HamburguerMenu = ({ isOpen, toggleMenu }) => {
  const handleTogleMenu = () => {
    toggleMenu();
  };
  
  return (
    <div
      className={`sm:hidden tham tham-e-squeeze tham-w-6 ${
        isOpen ? "tham-active" : ""
      }`}
      onClick={handleTogleMenu}
    >
      <div className="tham-box">
        <div className="tham-inner bg-negro" />
      </div>
    </div>
  );
};

export default HamburguerMenu;
