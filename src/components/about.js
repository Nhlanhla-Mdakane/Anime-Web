import React from "react";
import { Link } from "react-router-dom";

import aboutImg from "./images/about.png";

//this is the about page

class About extends React.Component {
  render() {
    return (
      <div className="aboutDiv">
        <img src={aboutImg} />
        <h2>About</h2>

        <p>
          {" "}
          Anime zone is an anime database website where user's can gather
          information on any anime in the database .Users can also See
          reviews(Heavily Biased) ,recommendations as well as add anime to their
          own watchList{" "}
        </p>
      </div>
    );
  }
}

export default About;
