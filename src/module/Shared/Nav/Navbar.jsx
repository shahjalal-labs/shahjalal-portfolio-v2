import { navbarItems } from "./NavbarConstant";
import NavbarItem from "./NavbarItem";
import useScrollPosition from "../../../hooks/useScrollPosition";

const Navbar = () => {
  const scrolled = useScrollPosition(10);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? "py-1" : "py-2"}`}
    >
      <div
        className={`flex justify-enter rounded-xl px-6 py-3 ${
          scrolled
            ? "bg-gradient-to-br from-gray-800/60 to-gray-900/70 backdrop-blur-xl border border-gray-600/40 shadow-2xl shadow-black/30"
            : "bg-gradient-to-br from-gray-900/50 to-gray-800/60 backdrop-blur-lg border border-gray-700/30 shadow-xl shadow-black/20"
        }`}
      >
        <ul className="flex items-center space-x-1 md:space-x-4">
          {navbarItems.map(({ to, icon, text }) => (
            <NavbarItem key={to} to={to} icon={icon} text={text} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
