import "./index.css";
import {
  AiTwotoneHome,
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineMail,
} from "react-icons/ai";
const BottomMenu = () => {
  return (
    <div className="BottomMenu">
      <ul className="bottonMenu-list">
        <li>
          <AiTwotoneHome />
        </li>
        <li>
          <AiOutlineSearch />
        </li>
        <li>
          <AiOutlineBell />
        </li>
        <li>
          <AiOutlineMail />
        </li>
      </ul>
    </div>
  );
};

export default BottomMenu;
