import "./index.css";

const MessageItem = ({ msgData }) => {
  const { photo, userName, email, body } = msgData;
  return (
    <div className="MessageItem">
      <div className="img-sec">
        <img src={photo} alt="profile picture" className="profile-picture" />
      </div>
      <div className="msg-text">
        <span>{userName}</span>
        <span className="email">{email}</span>
        <p>{body}</p>

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
