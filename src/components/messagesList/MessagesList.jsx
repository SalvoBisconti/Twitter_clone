import "./index.css";
import MessageItem from "../messageItem";
import { useState, useEffect } from "react";
import { GiFeather } from "react-icons/gi";
import { useRef } from "react";

const MessagesList = ({ setNavShow, inputValue, setModal, setIdMessage }) => {
  const [messageList, setMessageList] = useState([]);
  const scrollRef = useRef(null);
  const scrollBar = () => {
    if (scrollRef.current.scrollTop >= 300) {
      setNavShow(true);
    }
    if (scrollRef.current.scrollTop <= 300) {
      setNavShow(false);
    }
  };
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(({ posts }) => setMessageList(posts));
  }, []);

  const filteredMsgList = messageList.filter((msg) =>
    msg.body.includes(inputValue)
  );

  return (
    <div className="MessagesList" ref={scrollRef} onScroll={scrollBar}>
      {filteredMsgList.map((msg) => (
        <MessageItem
          msgData={msg}
          key={msg.id}
          setModal={setModal}
          id={msg.id}
          setIdMessage={setIdMessage}
        />
      ))}

      <div className="new-post">
        <GiFeather className="newpost-img" />
      </div>
    </div>
  );
};

export default MessagesList;
