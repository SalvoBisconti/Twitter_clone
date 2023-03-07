import "./index.css";
import SearchEl from "../searchEl";
import TrendItem from "../trendItem";
import trendList from "../../mocks/trendList";
import { IoSettingsOutline } from "react-icons/io5";
const TrendList = () => {
  return (
    <div className="TrendList">
      <SearchEl text="Search Twitter" />
      <div className="trending-main">
        <div className="trending-header">
          <h3 className="trending-title"> Trends for you</h3>
          <IoSettingsOutline />
        </div>
        {trendList.map((trend) => (
          <TrendItem trendData={trend} key={trend.id} />
        ))}
        <p className="showmore-text"> Show more</p>
      </div>
    </div>
  );
};

export default TrendList;
