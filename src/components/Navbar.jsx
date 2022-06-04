import { Board } from "./icons/Board";
import { List } from "./icons/List";
import { Setting } from "./icons/Setting";
import { Stats } from "./icons/Stats";
import { Tchat } from "./icons/Tchat";
import { User } from "./icons/User";

function Navbar() {
  return (
    <div id="navbar">
      <div>
        <img />
        <h1>OCNUM.</h1>
      </div>
      <div className="navbar-content">
        <a>
          <Stats />
        </a>
        <a>
          <Board />
        </a>
        <a>
          <Tchat />
        </a>
        <a>
          <User />
        </a>
        <a>
          <List />
        </a>
        <a>
          <Setting />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
