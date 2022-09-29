import React, { useState, useEffect } from "react";

import Menu from "../../icons/menu-bar.svg";
import File from "../../icons/file.svg";
import Search from "../../icons/search.svg";
import Book from "../../icons/book.svg";
import Apps from "../../icons/apps.svg";
import User from "../../icons/user.svg";
import Settings from "../../icons/settings.svg";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="NavBar">
      <img onClick={toggleNav} className="MenuBtn" src={Menu} alt="Menu" />
      {(toggleMenu || screenWidth > 500) && (
        <div className="NavContainer">
          <div className="Top">
            <img className="NavBtn" src={File} alt="Explore" />
            <img className="NavBtn" src={Search} alt="Search" />
            <img className="NavBtn" src={Book} alt="Dictionary" />
            <img className="NavBtn" src={Apps} alt="Apps" />
          </div>
          <div className="Bottom">
            <img className="NavBtn" src={Settings} alt="Settings" />
            <img className="NavBtn" src={User} alt="User" />
          </div>
        </div>
      )}
    </nav>
  );
}
