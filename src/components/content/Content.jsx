import DesktopHeader from "../desktopHeader";
import MessagesList from "../messagesList";
import "./index.css";

const Content = ({ setNavShow }) => {
  return (
    <div className="Content">
      <DesktopHeader />
      <MessagesList setNavShow={setNavShow} />
    </div>
  );
};

export default Content;
