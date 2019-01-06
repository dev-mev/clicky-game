import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Clicky Game
      </Link>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="click-message">
            
          </li>
          <li className="score">
            Score: {props.score} | High Score: {props.highScore}
          </li>
        </ul>
     </div>
    </nav>
  );
}

export default Navbar;
