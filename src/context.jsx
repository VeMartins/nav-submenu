import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const GlobalContext = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <AppContext.Provider
      value={{ isMenuOpen, openMenu, closeMenu, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default GlobalContext;
