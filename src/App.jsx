import BottomMenu from "./components/bottomMenu";
import Header from "./components/header";
import MessagesList from "./components/messagesList";
import HamburgerMenu from "./components/hamburgerMenu";
import SideMenu from "./components/sideMenu";
import Content from "./components/content";
import "./App.css";

import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="App">
      <SideMenu />
      <HamburgerMenu isActive={isActive} setIsActive={setIsActive} />
      <Header setIsActive={setIsActive} />
      <Content />
      {/* <MessagesList /> */}
      <BottomMenu />
    </div>
  );
}

export default App;
