import BottomMenu from "./components/bottomMenu";
import Header from "./components/header";
import MessagesList from "./components/messagesList";
import HamburgerMenu from "./components/hamburgerMenu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HamburgerMenu /> */}
      <MessagesList />
      <BottomMenu />
    </div>
  );
}

export default App;
