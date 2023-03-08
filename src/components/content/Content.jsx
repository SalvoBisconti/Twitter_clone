import DesktopHeader from "../desktopHeader";
import MessagesList from "../messagesList";
import SubHeader from "../subHeader";
import "./index.css";

const Content = () => {
  return (
    <div className="Content">
      <DesktopHeader />
      <SubHeader />
      <MessagesList />
    </div>
  );
};

export default Content;
