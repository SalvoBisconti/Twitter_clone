import DesktopHeader from "../desktopHeader";
import MessagesList from "../messagesList";
import "./index.css";
import { useState } from "react";

const Content = ({ setNavShow }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="Content">
      <DesktopHeader setInputValue={setInputValue} />
      <MessagesList setNavShow={setNavShow} inputValue={inputValue} />
    </div>
  );
};

export default Content;
