import React from "react";
import Theme from "./Theme";
import classes from "@/app/styles/Navbar.module.scss";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.navList}>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/experience">experience</Link>
        </li>
        <li>
          <Link href="/projects">projects</Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/julio-rafael-souza/"
            target="_blank"
          >
            linkedin
          </Link>
        </li>
      </ul>
      <div className={classes.themeWrapper}>
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
