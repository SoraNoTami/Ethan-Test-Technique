import "./App.css";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import SideContent from "./components/SideContent";

function App() {
  return (
    <div>
      <div id="app">
        <Navbar />
        <MainContent />
        <SideContent />
      </div>
    </div>
  );
}

export default App;
