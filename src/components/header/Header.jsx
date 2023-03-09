// ESERCIZIO 09-03-2023
// Attraverso l'utilizzo dell'hock useRef allo scroll l'header si
// sposta in alto
// Mentre quando siritorna alla posizione di partenza l'header ritorna
// alla sua posizione naturale.
// L'usestate che controlla questa funzionalità è creato in App.jsx
// Tutto ciò è relativo alla modalità mobile

import "./index.css";
import SubHeader from "../subHeader";
import { AiOutlineTwitter, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineSparkles } from "react-icons/hi";

const Header = ({ setIsActive, navShow }) => {
  return (
    <div className="Header">
      <ul className={`header-list ${navShow && "header-out"}`}>
        <li>
          <AiOutlineMenu onClick={() => setIsActive((prev) => !prev)} />
        </li>
        <li>
          <AiOutlineTwitter />
        </li>
        <li>
          <HiOutlineSparkles />
        </li>
      </ul>
      <SubHeader />
    </div>
  );
};

export default Header;
