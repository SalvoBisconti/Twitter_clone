import "./index.css";
import { useState } from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { BsImage, BsGeoAlt } from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai";
import { CiCircleList } from "react-icons/ci";

const Modal = ({ setModal, idMessage }) => {
  const [modalInput, setModalInput] = useState("");

  const editMessage = (e) => {
    e.preventDefault();
    fetch(`https://dummyjson.com/posts/${idMessage}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        body: modalInput,
      }),
    });
    setModal(false);
  };

  return (
    <div className="Modal">
      <div className="modal-content">
        <form onSubmit={editMessage}>
          <div className="modal-header">
            <button className="back-button" onClick={() => setModal(false)}>
              {" "}
              Go back
            </button>
            <button className="send-button" type="submit">
              {" "}
              Send
            </button>
          </div>
          <textarea
            name="textbox"
            id="modal-input"
            cols="100"
            rows="50"
            placeholder="Write new message"
            onChange={(e) => setModalInput(e.target.value)}
          ></textarea>
        </form>

        <div className="icons-modal">
          <MdKeyboardVoice />
          <IoStatsChartSharp />
          <BsImage />
          <AiOutlineFileGif />
          <CiCircleList />
          <BsGeoAlt />
        </div>
      </div>
    </div>
  );
};

export default Modal;
