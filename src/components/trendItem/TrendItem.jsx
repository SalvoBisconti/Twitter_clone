import "./index.css";

const TrendItem = ({ trendData }) => {
  const { hashtag, trending, tweetNumb } = trendData;
  return (
    <div className="TrendItem">
      <p>{`trending in ${trending}`}</p>
      <h4>{`#${hashtag}`}</h4>
      <p>{`${tweetNumb} people are Twitting about this`}</p>
    </div>
  );
};

export default TrendItem;
