import DesktopHeader from "../desktopHeader";
import MessagesList from "../messagesList";
import Modal from "../modal";

import "./index.css";
import { useState } from "react";

const Content = ({ setNavShow }) => {
  const [inputValue, setInputValue] = useState("");
  const [modal, setModal] = useState(false);
  const [idMessage, setIdMessage] = useState("");

  return (
    <div className="Content">
      {modal ? <Modal setModal={setModal} idMessage={idMessage} /> : null}
      <DesktopHeader setInputValue={setInputValue} />
      <MessagesList
        setNavShow={setNavShow}
        inputValue={inputValue}
        setModal={setModal}
        setIdMessage={setIdMessage}
      />
    </div>
  );
};

export default Content;
