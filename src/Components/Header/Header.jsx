import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <div className="logoHeader">
          <img src={require("../../img/web_logo.png")} alt="" />
        </div>
        <nav>
          <div className="header--nav">Mi Portfolio</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
