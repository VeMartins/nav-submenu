import sublinks from "../data";
import { useAppContext } from "../context";
import { FaTimes } from "react-icons/fa";
import Submenu from "./Submenu";

const Menu = () => {
  const { isMenuOpen, closeMenu } = useAppContext();

  return (
    <aside className={isMenuOpen ? "show-sidebar sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button type="button" onClick={closeMenu} className="close-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((link) => {
            const { pageId, page, links } = link;

            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { url, icon, label, id } = link;
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default Menu;
