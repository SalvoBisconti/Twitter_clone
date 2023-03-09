// ESERCIZIO 09-03-2023
// Attraverso l'utilizzo dell'hock useRef allo scroll l'header si
// sposta in alto.
// Mentre quando siritorna alla posizione di partenza l'header ritorna
// alla sua posizione naturale.
// L'usestate che controlla questa funzionalità è creato in App.jsx.
// Tutto ciò è relativo alla modalità mobile

import "./index.css";
import MessageItem from "../messageItem";
import { useState, useEffect } from "react";
import { GiFeather } from "react-icons/gi";
import { useRef } from "react";

const MessagesList = ({ setNavShow, inputValue }) => {
  const [messageList, setMessageList] = useState([]);
  const scrollRef = useRef(null);
  console.log(inputValue);
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
        <MessageItem msgData={msg} key={msg.id} />
      ))}
      <div className="new-post">
        <GiFeather className="newpost-img" />
      </div>
    </div>
  );
};

export default MessagesList;
