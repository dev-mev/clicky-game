import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
      <Link className="navbar-brand d-flex w-50 mr-auto" to="/">
        Clicky Game
      </Link>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav navbar-nav ml-auto w-100 justify-content-left">
        <li className="instructions">
          <a className="nav-link" href="#">Instructions</a>
        </li>
      </ul>
      <ul className="navbar-nav w-100">
        <li className="click-message">
            {props.clickMessage}
        </li>
      </ul>
      <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
        <li className="score">
          Score: {props.score} | High Score: {props.highScore}
        </li>
      </ul>
     </div>
    </nav>
  );
}

export default Navbar;
