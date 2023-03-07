import messageList from "../../mocks/messageList";
import {
  AiOutlineUser,
  AiFillTwitterCircle,
  AiOutlineComment,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BsBookmark, BsCardList } from "react-icons/bs";
import "./index.css";

const HamburgerMenu = ({ isActive, setIsActive }) => {
  return (
    <div className={`HamburgerMenu ${isActive ? "show" : ""}`}>
      <div className="hamburger-area">
        <div className="user-info">
          <img
            className="user-img"
            src={messageList[0].photo}
            alt="user image"
          />
          <p> {messageList[0].userName} </p>
          <p> {messageList[0].email}</p>
        </div>
        <ul className="HamburgerMenu-list">
          <li>
            <AiOutlineUser />
            <span> Profile</span>
          </li>
          <li>
            <AiFillTwitterCircle className="twitter-blue" />
            <span> Twitter Blue</span>
          </li>
          <li>
            <AiOutlineComment />
            <span> Argoments</span>
          </li>
          <li>
            <BsBookmark />
            <span> Bookmarks</span>
          </li>
          <li>
            <BsCardList />
            <span> Lists</span>
          </li>
          <li>
            <AiOutlineUserAdd />
            <span> Twitter Circle</span>
          </li>
        </ul>
      </div>
      <div className="modal" onClick={() => setIsActive((prev) => !prev)}></div>
    </div>
  );
};

export default HamburgerMenu;
