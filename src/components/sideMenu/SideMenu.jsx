import "./index.css";
import { AiTwotoneHome, AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import { BsBookmark, BsCardList, BsHash, BsTwitter } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
const SideMenu = () => {
  return (
    <div className="SideMenu">
      <ul className="sidemenu-list">
        <li>
          <BsTwitter className="logo-sidemenu" />
        </li>
        <li>
          <AiTwotoneHome />
          <p>Home</p>
        </li>
        <li>
          <BsHash />
          <p>Explore</p>
        </li>
        <li>
          <AiOutlineBell />
          <p>Notifications</p>
        </li>
        <li>
          <AiOutlineMail />
          <p>Messages</p>
        </li>
        <li>
          <BsBookmark />
          <p>Bookmarks</p>
        </li>
        <li>
          <BsCardList />
          <p>Lists</p>
        </li>
        <li>
          <CgProfile />
          <p>Profile</p>
        </li>
        <li>
          <CiCircleMore />
          <p>More</p>
        </li>
      </ul>
      <button className="sidemenu-btn">Tweet</button>
    </div>
  );
};

export default SideMenu;
