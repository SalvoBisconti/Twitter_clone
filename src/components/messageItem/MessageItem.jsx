import "./index.css";
import { useState, useEffect } from "react";

const MessageItem = ({ msgData }) => {
  const { body, userId } = msgData;
  const [userData, setUserData] = useState([]);

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
          <img
            src="https://img.icons8.com/ios/512/speech-bubble--v1.png"
            alt="comment"
          />
          <img
            src="https://img.icons8.com/external-inkubators-basic-outline-inkubators/512/external-repost-user-interface-inkubators-basic-outline-inkubators.png"
            alt="retweet"
          />
          <img
            src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/512/external-love-social-media-ui-tanah-basah-basic-outline-tanah-basah.png"
            alt="like"
          />
          <img
            src="https://img.icons8.com/material-sharp/512/share-rounded.png"
            alt="share"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
