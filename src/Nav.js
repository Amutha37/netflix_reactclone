import React, { useState, useEffect } from "react";
import "./Nav.css";
// import logo from "/public/logo/logo.png";

function Nav() {
  const [show, setHandleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else setHandleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  // using string template nav class always but if the show is true set class to nav-black
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src={process.env.PUBLIC_URL + "/logo/logo.png"}
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src={process.env.PUBLIC_URL + "/logo/Netflix-avatar.png"}
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
