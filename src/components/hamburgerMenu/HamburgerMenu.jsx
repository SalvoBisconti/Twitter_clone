import {
  AiOutlineUser,
  AiFillTwitterCircle,
  AiOutlineComment,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BsBookmark, BsCardList } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";

import { useState, useEffect } from "react";
import "./index.css";

const HamburgerMenu = ({ isActive, setIsActive }) => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/users/1`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className={`HamburgerMenu ${isActive ? "show" : ""}`}>
      <div className="hamburger-area">
        <div className="user-info">
          <div className="img-user-info">
            <img className="user-img" src={userData.image} alt="user image" />
            <BiUserPlus className="add-icon" />
          </div>
          <p> {`${userData.firstName} ${userData.lastName}`}</p>
          <p> {`@${userData.username}`}</p>
          <div className="followers-count">
            <p> {`${userData.age} Following`}</p>
            <p> {`${userData.height} Follower`}</p>
          </div>
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
