import React from "react";
import Theme from "./Theme";
import classes from "@/app/styles/Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.navList}>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/experience">experience</a>
        </li>
        <li>
          <a href="/projects">projects</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/julio-rafael-souza/"
            target="_blank"
          >
            linkedin
          </a>
        </li>
      </ul>
      <div className={classes.themeWrapper}>
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
