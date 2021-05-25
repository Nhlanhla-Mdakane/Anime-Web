import React from "react";
import { Link } from "react-router-dom";
//allows users to navigate to different pages
class Nav extends React.Component {
  render() {
    return (
      <div id="navDiv">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/WatchList">Watch List</Link>
          </li>

          <li>
            <Link to="/Recommended">Recommended</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
