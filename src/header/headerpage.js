import "./headerpage.css";
import "../assets/css/common-style.css";
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";

import { useLocation, useParams } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function HeaderPage() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="header">
      <div className="mobile-view">
        <h2>AM</h2>
        <GiHamburgerMenu
          size={30}
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => setIsVisible(!isVisible)}
        />
        <Sidebar visible={isVisible} onHide={() => setIsVisible(false)}>
          <div className="nav-mobile">
            <a href="/" className={pathname === "/" ? "active" : ""}>
              About
            </a>
            <a
              href="/experience"
              className={pathname === "/experience" ? "active" : ""}
            >
              Experience
            </a>
            <a href="/work" className={pathname === "/work" ? "active" : ""}>
              Work
            </a>
            <a
              href="/education"
              className={pathname === "/education" ? "active" : ""}
            >
              Education
            </a>
            <a href="/skill" className={pathname === "/skill" ? "active" : ""}>
              Skill
            </a>
            <a
              href="/contact"
              className={pathname === "/contact" ? "active" : ""}
            >
              Contact
            </a>
          </div>
        </Sidebar>
      </div>
      <div className="desktop">
        <div className="nav">
          <a href="/" className={pathname === "/" ? "active" : ""}>
            About
          </a>
          <a
            href="/experience"
            className={pathname === "/experience" ? "active" : ""}
          >
            Experience
          </a>
          <a href="/work" className={pathname === "/work" ? "active" : ""}>
            Work
          </a>
          <a
            href="/education"
            className={pathname === "/education" ? "active" : ""}
          >
            Education
          </a>
          <a href="/skill" className={pathname === "/skill" ? "active" : ""}>
            Skill
          </a>
          <a
            href="/contact"
            className={pathname === "/contact" ? "active" : ""}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
