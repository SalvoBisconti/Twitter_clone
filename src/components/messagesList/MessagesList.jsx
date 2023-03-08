import "./index.css";
import MessageItem from "../messageItem";
import { useState, useEffect } from "react";
import { GiFeather } from "react-icons/gi";

const MessagesList = () => {
  const [messageList, setMessageList] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(({ posts }) => setMessageList(posts));
  }, []);
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
