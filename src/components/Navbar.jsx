import { FaBars } from "react-icons/fa";
import { useAppContext } from "../context";

import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openMenu, setPageId } = useAppContext();

  // This hides the submenu when the mouse moves away from the Page buttons
  const handleSubmenu = (e) => {
    // console.log(e.target);
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">logo</h3>
        <button type="button" onClick={openMenu} className="toggle-btn">
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
