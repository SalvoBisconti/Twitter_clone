import "./index.css";
import { AiOutlineTwitter, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineSparkles } from "react-icons/hi";

const Header = ({ setIsActive }) => {
  return (
    <div className="Header">
      <ul className="header-list">
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
    </div>
  );
};

export default Header;
