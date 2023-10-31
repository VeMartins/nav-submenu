import sublinks from "../data";
import { useAppContext } from "../context";

const NavLinks = () => {
  const { setPageId } = useAppContext();

  return (
    <div className="nav-links">
      {sublinks.map((link) => {
        return (
          <button
            key={link.pageId}
            className="nav-link"
            type="button"
            onMouseEnter={() => setPageId(link.pageId)}
          >
            {link.page}
          </button>
        );
      })}
    </div>
  );
};
export default NavLinks;
