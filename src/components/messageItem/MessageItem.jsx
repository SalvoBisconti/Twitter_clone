import "./index.css";
import { useState, useEffect } from "react";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoIosStats } from "react-icons/io";
import { FiShare } from "react-icons/fi";

const MessageItem = ({ msgData }) => {
  const { body, userId } = msgData;
  const [userData, setUserData] = useState([]);
  const [likesCount, setLikesCount] = useState(Math.floor(Math.random() * 50));

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className="MessageItem">
      <div className="img-sec">
        <img
          src={userData.image}
          alt="profile picture"
          className="profile-picture"
        />
      </div>
      <div className="msg-text">
        <span>{`${userData.firstName} ${userData.lastName}`}</span>
        <span className="username">{`@${userData.username}`}</span>
        <p className="msg-text">{body}</p>

        <div className="msg-icons">
          <FaRegComment />
          <BiRepost />
          <div className="likes">
            <AiOutlineHeart
              onClick={() => {
                setLikesCount(likesCount + 1);
              }}
            />
            <p>{likesCount}</p>
          </div>
          <IoIosStats />
          <FiShare />
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
