import "./index.css";
import SubHeader from "../subHeader";
import { AiOutlineTwitter, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineSparkles } from "react-icons/hi";

const Header = ({ setIsActive, navShow }) => {
  return (
    <div className={`Header ${navShow && "header-out"}`}>
      <ul className={`header-list`}>
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
