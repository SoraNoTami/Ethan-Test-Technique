import { Board } from "./assets/icons/Board";
import { List } from "./assets/icons/List";
import { Setting } from "./assets/icons/Setting";
import { Stats } from "./assets/icons/Stats";
import { Tchat } from "./assets/icons/Tchat";
import { User } from "./assets/icons/User";
import Logo from "./assets/img/Logo.png";

function Navbar() {
  return (
    <div id="navbar">
      <div>
        <img src={Logo}/>
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
