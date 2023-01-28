import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

import logo from "../assets/logo.png";
import "../styles/index.css";

const mockData = [
  { name: "Home", to: "/" },
  { name: "Order", to: "/orders" },
  { name: "Contacts", to: "/contacts" },
  { name: "FAQ", to: "/faq" },
];

function Header() {
  let activeStyle = {
    textShadow: "0px 0px 2px rgb(68, 68, 68)",
    color: "rgb(161, 70, 70)",
  };

  return (
    <>
      <header id="app-name-container">
        <div id="logo-wrapper">
          <span id="logo">
            <img src={logo} alt="logo" />
          </span>
        </div>
        <div id="title-wraper">
          <NavLink to={"/"}>
            <span className="app-name">Extreme Retro Burgers</span>
          </NavLink>
        </div>
        <div id="header-item-wrapper">
          {mockData.map((link, index) => (
            <NavLink
              className={"header-item"}
              to={link.to}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span key={`${index}_${link.name}`}>{link.name}</span>
            </NavLink>
          ))}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Header;
