import React from "react";
import "./Header.scss";
import { LOGO } from "../../assets/images";

import appStyles from "./Header.module.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="container">
          <div className={appStyles.navItems}>
            <a href="#">
              <img className={appStyles.mainLogo} src={LOGO} alt="MainLOGO" />
            </a>
            <div className={appStyles.navItem}>
              <a className={appStyles.links} href="#">
                Home
              </a>
              <a className={appStyles.links} href="#">
                About
              </a>
              <a className={appStyles.links} href="#">
                Services
              </a>
              <a className={appStyles.links} href="#">
                Articles
              </a>
              <a className={appStyles.links} href="#">
                Contact
              </a>
            </div>
            <div className={appStyles.navButtons}>
              <button className={appStyles.buttonHeader}>Cart (0)</button>
              <button className={appStyles.buttonHeader}>
                Get a free quote
              </button>
            </div>
            <div className={appStyles.hamburger}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
