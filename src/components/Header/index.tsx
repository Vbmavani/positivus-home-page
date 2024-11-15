import React from "react";
import Logo from "../../assets/svg/logo.svg";
import HamBurgerIcon from "../../assets/svg/burger-menu-icon.svg";

const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          {/* logo */}

          <img src={Logo} alt="Positivus Logo" style={{ width: "150px" }} />
        </div>
        <nav className="mobile-menu">
          <img src={HamBurgerIcon} alt="menu-icon" />
        </nav>
        <nav className="navbar">
          <ul>
            <li>About us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
          <button className="request-a-quote">Request a quote</button>
        </nav>
      </header>
    </>
  );
};

export default Header;
