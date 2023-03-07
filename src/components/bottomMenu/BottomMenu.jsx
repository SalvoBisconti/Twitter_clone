import "./index.css";

const BottomMenu = () => {
  return (
    <div className="BottomMenu">
      <ul className="bottonMenu-list">
        <li>
          <img
            src="https://img.icons8.com/windows/512/home-page.png"
            alt="home"
          />
        </li>
        <li>
          <img src="https://img.icons8.com/ios/512/search.png" alt="search" />
        </li>
        <li>
          <img
            src="https://img.icons8.com/ios/512/appointment-reminders.png"
            alt="notification"
          />
        </li>
        <li>
          <img
            src="https://img.icons8.com/ios/512/filled-message.png"
            alt="messages"
          />
        </li>
      </ul>
    </div>
  );
};

export default BottomMenu;
