import React from "react";
import logo from "../../assets/cube3logoicon.svg";
import "../../styles/navbar/navbar.css";

const Navbar = () => {
  const leftOpt = [
    { name: "Enterprise Business", link: "/enterprise-business" },
    { name: "Join Us", link: "/" },
  ];

  const rightOpt = [
    { name: "Retail Business", link: "/retail-business" },
    { name: "Login", link: "/" },
  ];

  const windowLocation = window.location.pathname;
  const customStyle =
    windowLocation === "/about"
      ? { transform: "translate(30%, 3%)" }
      : { transform: "translate(50%, 5%)" };

  return (
    <div
      className={
        windowLocation === "/about" ? "navbar-eq--about" : "navbar-noteq--about"
      }
    >
      <div className="navbar-container--inner2">
        <div className="navbar-container--inner2--inner">
          <div className="left-links">
            <ul style={{ display: "flex", listStyle: "none" }}>
              {leftOpt.map((item, index) => {
                return (
                  <a
                    href={item.link}
                    className={
                      windowLocation === "/retail-business"
                        ? "retailLink-eqInAbt"
                        : "retailLink-NoteqInAbt"
                    }
                  >
                    <li key={index}>{item.name}</li>
                  </a>
                );
              })}
            </ul>
          </div>
          <div
            // style={customStyle}
            // className={
            //   windowLocation === "/about"
            //     ? "navbar--aboutLinkEq--inner"
            //     : "navbar--aboutLinkNotEq--inner"
            // }
            className="logo"
          >
            <a href="/">
              <img
                // style={customStyle}
                src={logo}
                alt="Logo"
                // style = {{width: '100%', height: '100%'}}
              />
            </a>
          </div>
          <div className="right-links">
            <ul style={{ display: "flex", listStyle: "none" }}>
              {rightOpt.map((item, index) => {
                return (
                  <a
                    href={item.link}
                    className={
                      windowLocation === "/retail-business"
                        ? "retailLink-eqInAbtForMobScreen"
                        : windowLocation === "/about"
                        ? "abtLink-eqInAbtForMobScreen"
                        : "abtLink-NoteqInAbtForMobScreen"
                    }
                  >
                    <li key={index}>{item.name}</li>
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="checkbox-wrapper--hidden">
        <input type="checkbox" id="active" />
        <label for="active" className="menu-btn">
          <span></span>
        </label>
        <label for="active" className="close"></label>
        <div className="wrapper">
          <ul>
            <li>
              <a href="/enterprise-business">Enterprise Business</a>
            </li>
            <li>
              <a href="/">Join us</a>
            </li>
            <li>
              <a href="/retail-business">Retail Business</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
