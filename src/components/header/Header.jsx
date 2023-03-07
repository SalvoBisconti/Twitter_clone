import "./index.css";
// import { useState } from "react";

const Header = ({ setIsActive }) => {
  // const [isActive, setIsActive] = useState(false);

  return (
    <div className="Header">
      <ul className="header-list">
        <li>
          <img
            src="../../../public/hamburger.png"
            alt="menu"
            onClick={() => setIsActive((prev) => !prev)}
          />
        </li>
        <li>
          <img src="../../../public/logo.png" alt="log" />
        </li>
        <li>
          <img src="../../../public/sparkling.png" alt="stars" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
