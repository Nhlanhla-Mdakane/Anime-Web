import React from "react";
import { Link } from "react-router-dom";

import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";

//header of website

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="headerTitle">Anime Zone</h1>

        <div className="imgDiv">
          <div className="headerBack">
            <img src={img1} />

            <img src={img2} />

            <img src={img3} />

            <img src={img4} />

            <img src={img5} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
