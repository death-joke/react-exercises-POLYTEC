import { Link, NavLink, useLocation } from "react-router-dom";

export function HomeMenu() {
  let location = useLocation();

  const active = (path) => {
    return location.pathname === path;
  };

  return (
    <div>
      <Link to="/" className={`button ${active("/") ? "button-outline" : ""} `}>
        Home
      </Link>
      <NavLink
        to="/todo"
        className={({ isActive }) => (isActive ? "button button-outline" : "button")}
      >
        Todo
      </NavLink>
    </div>
  );
}
