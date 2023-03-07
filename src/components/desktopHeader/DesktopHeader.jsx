import SearchEl from "../searchEl";

import "./index.css";
import { HiOutlineSparkles } from "react-icons/hi";
import { BsCardImage, BsBarChartLine } from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai";

const DesktopHeader = () => {
  return (
    <div className="DesktopHeader">
      <div className="title-sec">
        <h3> Home</h3>
        <HiOutlineSparkles className="sparkling" />
      </div>
      <div className="search-sec">
        {/* <div className="input-area"> */}
        <img
          src="https://img.icons8.com/color/512/user-female-circle.png"
          alt="user"
          className="user-search-area"
        />
        <SearchEl text="What's happening?" />
        {/* </div> */}
        <div className="icons">
          <BsCardImage />
          <AiOutlineFileGif />
          <BsBarChartLine className="chart-icon" />
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
