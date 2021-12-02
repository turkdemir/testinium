import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={"../../images/testinium.svg"} alt="logo"></img>
        </Link>
      </div>
      <div >
        <nav>
          <ul className="header-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/candidates">Candidates</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
