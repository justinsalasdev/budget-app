import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

export default function Nav() {
  const styles = {
    className: "p-2",
    activeClassName: "bg-purple-300 text-white",
  };
  return (
    <nav className="bg-gray-100 shadow-md text-black uppercase flex justify-end items-center pr-2">
      <NavLink {...styles} to={routes.login}>
        Login
      </NavLink>
      <NavLink exact {...styles} to={routes.dash}>
        Dashboard
      </NavLink>
    </nav>
  );
}
