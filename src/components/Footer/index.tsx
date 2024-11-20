import React from "react";
import Logo from "../../assets/svg/logo.svg";
import LinkedinLogo from "../../assets/images/linkedin-logo.png";
import FacebookLogo from "../../assets/images/facebook-logo.png";
import TwitterLogo from "../../assets/images/linkedin-logo.png";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <img className="footer-logo" src={Logo} alt="logo" />
        <ul className="footer-links">
          <li className="footer-link-item">
            <a className="footer-link">About us</a>
          </li>
          <li className="footer-link-item">
            <a className="footer-link">Services</a>
          </li>
          <li className="footer-link-item">
            <a className="footer-link">Use Cases</a>
          </li>
          <li className="footer-link-item">
            <a className="footer-link">Pricing</a>
          </li>
          <li className="footer-link-item">
            <a className="footer-link">Blog</a>
          </li>
        </ul>
        <div className="footer-logos">
          <img
            className="footer-social-logo"
            src={LinkedinLogo}
            alt="LinkedIn logo"
          />
          <img
            className="footer-social-logo"
            src={FacebookLogo}
            alt="Facebook logo"
          />
          <img
            className="footer-social-logo"
            src={TwitterLogo}
            alt="Twitter logo"
          />
        </div>
      </div>
      <div className="footer-main-content"></div>
      <div className="footer-divider"></div>
    <div className="footer-bottom">
      <p className="footer-rights-reserved">
        © 2023 Positivus. All Rights Reserved.
      </p>
      <a className="footer-privacy-policy" href="#">Privacy Policy</a>
    </div>
    </footer>
  );
};

export default Footer;
