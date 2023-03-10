import "./index.css";
import { useState, useEffect } from "react";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoIosStats } from "react-icons/io";
import { FiShare } from "react-icons/fi";

const MessageItem = ({ msgData, setModal, id, setIdMessage }) => {
  const { body, userId } = msgData;
  const [userData, setUserData] = useState([]);
  const [likesCount, setLikesCount] = useState(Math.floor(Math.random() * 50));
  const [likesClass, setLikesClass] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
  const likeOn = () => {
    likesClass ? setLikesCount(likesCount + 1) : setLikesCount(likesCount - 1);
  };
  const onRepostClick = () => {
    setModal(true);
    setIdMessage(id);
  };
  return (
    <div className="MessageItem" id={id}>
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
          <BiRepost className="repost" onClick={onRepostClick} />
          <div className="likes">
            {likesClass ? (
              <AiOutlineHeart
                className="like-no"
                onClick={() => {
                  likeOn();
                  setLikesClass((prev) => !prev);
                }}
              />
            ) : (
              <AiFillHeart
                className="like-on"
                onClick={() => {
                  likeOn();
                  setLikesClass((prev) => !prev);
                }}
              />
            )}

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
