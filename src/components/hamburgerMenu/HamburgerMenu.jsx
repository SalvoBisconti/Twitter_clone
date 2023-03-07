import "./index.css";
import messageList from "../../mocks/messageList";

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
            <img
              src="https://img.icons8.com/material-outlined/512/user.png"
              alt="user"
            />
            <span> Profile</span>
          </li>
          <li>
            <img
              src="https://img.icons8.com/fluency/512/twitter-circled.png"
              alt="twitter blue"
            />
            <span> Twitter Blue</span>
          </li>
          <li>
            <img
              src="https://img.icons8.com/fluency-systems-regular/512/comments.png"
              alt="comments"
            />
            <span> Argoments</span>
          </li>
          <li>
            <img
              src="https://img.icons8.com/material/256/bookmark-outline.png"
              alt="bookmark"
            />
            <span> Bookmarks</span>
          </li>
          <li>
            <img
              src="https://img.icons8.com/material-outlined/512/ingredients-list.png"
              alt="list"
            />
            <span> Lists</span>
          </li>
          <li>
            <img
              src="https://img.icons8.com/pulsar-color/512/user-male-circle.png"
              alt="twitter circle"
            />
            <span> Twitter Circle</span>
          </li>
        </ul>
      </div>
      <div className="modal" onClick={() => setIsActive((prev) => !prev)}></div>
    </div>
  );
};

export default HamburgerMenu;
