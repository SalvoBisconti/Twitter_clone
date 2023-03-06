import "./index.css";
import MessageItem from "../messageItem";
import messageList from "../../mocks/messageList";

const MessagesList = () => {
  return (
    <div className="MessagesList">
      {messageList.map((msg) => (
        <MessageItem msgData={msg} key={msg.id} />
      ))}
    </div>
  );
};

export default MessagesList;
