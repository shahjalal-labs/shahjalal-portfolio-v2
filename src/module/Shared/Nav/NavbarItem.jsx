import { NavLink } from "react-router";

const NavbarItem = ({ to, icon, text }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
            isActive
              ? "text-white bg-white/15 shadow-inner backdrop-blur-sm border border-white/10"
              : "text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-xs border border-transparent"
          }`
        }
      >
        <span>{icon}</span>
        <span className="hidden md:inline-block text-sm">{text}</span>
      </NavLink>
    </li>
  );
};

export default NavbarItem;
