import React from "react";
import Theme from "./Theme";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center font-medium justify-between py-5 h-3 w-full">
      <ul className="flex items-center space-x-10">
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/works">experience</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/julio-rafael-souza/" target="_blank">linkedin</a>
        </li>
        <li>
          <a href="https://github.com/JulioRaf4" target="_blank">github</a>
        </li>
      </ul>
      <div className="flex-shrink-0">
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
