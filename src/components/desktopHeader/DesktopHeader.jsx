import "./index.css";

const DesktopHeader = () => {
  return (
    <div className="DesktopHeader">
      <div className="title-sec">
        <h3> Home</h3>
        <img src="../../../public/sparkling.png" alt="sparkling" />
      </div>
      <div className="search-sec">
        <img
          src="https://img.icons8.com/color/512/user-female-circle.png"
          alt="user"
          className="user-search-area"
        />
        <input
          type="text"
          placeholder="What's happening?"
          className="search-area"
        />
        <img src="../../../public/img-icon.png" alt="upload img" />
        <img src="../../../public/gif-icon.png" alt="upload gif" />
        <img src="../../../public/stats-icon.png" alt="upload stats" />
      </div>
    </div>
  );
};

export default DesktopHeader;
