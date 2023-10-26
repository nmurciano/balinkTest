import { Link } from "react-router-dom";
import logo from "../assets/SpaceX_logo_black.svg.png";
import SearchBar from "./searchBar";

function Header() {
  return (
    <header className="App-header">
      <div className="logo">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <h1>
          <b>LATEST NEWS</b>
        </h1>
      </div>
      <div className="searchBar">
        <SearchBar></SearchBar>
      </div>
    </header>
  );
}

export default Header;
