import "./index.css";

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <ul className="sidemenu-list">
        <li>
          <img
            src="https://img.icons8.com/color/256/twitter--v1.png"
            alt="logo"
            className="logo-sidemenu"
          />
        </li>
        <li>
          <img
            src="https://img.icons8.com/windows/512/home-page.png"
            alt="home"
          />
          <p>Home</p>
        </li>
        <li>
          <img
            src="https://img.icons8.com/fluency-systems-regular/512/hashtag-large.png"
            alt="explore"
          />
          <p>Explore</p>
        </li>
        <li>
          <img
            src="https://img.icons8.com/ios/512/appointment-reminders.png"
            alt="notifications"
          />
          <p>Notifications</p>
        </li>
        <li>
          <img
            src="https://img.icons8.com/ios/512/filled-message.png"
            alt="messages"
          />
          <p>Messages</p>
        </li>
        <li>
          <img
            src="https://img.icons8.com/material/256/bookmark-outline.png"
            alt="bookmarks"
          />
          <p>Bookmarks</p>
        </li>
        <li>
          <img
            src="https://img.icons8.com/material-outlined/512/ingredients-list.png"
            alt="lists"
          />
          <p>Lists</p>
        </li>
        <li>
          <img
            src="https://img.icons8.com/color/512/user-female-circle.png"
            alt="profile"
          />
          <p>Profile</p>
        </li>
        <li>
          <img
            src="https://img.icons8.com/ios/512/connection-status-off.png"
            alt="more"
          />
          <p>More</p>
        </li>
      </ul>
      <button className="sidemenu-btn">Tweet</button>
    </div>
  );
};

export default SideMenu;
