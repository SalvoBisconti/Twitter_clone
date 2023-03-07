import "./index.css";
import MessageItem from "../messageItem";
import messageList from "../../mocks/messageList";
import { GiFeather } from "react-icons/gi";

const MessagesList = () => {
  return (
    <div className="MessagesList">
      {messageList.map((msg) => (
        <MessageItem msgData={msg} key={msg.id} />
      ))}
      <div className="new-post">
        <GiFeather className="newpost-img" />
      </div>
    </div>
  );
};

export default MessagesList;
