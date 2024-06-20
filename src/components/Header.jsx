import React from "react";
import logo from "../assets/cocretainc.jpg"; // Ruta al logo

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Cocreta INC" />
    </header>
  );
};

export default Header;
