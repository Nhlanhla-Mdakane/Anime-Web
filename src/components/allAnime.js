import React from "react";

import animeFile from "./data/animeData.js";

import { Link } from "react-router-dom";
/*this page gets anime data from the Components,displays it to user and allows users to view specific info about
an anime they picked
*/
let animeData = animeFile;

class AllAnime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //will get values from form
      animeState: "",
    };
  }

  render() {
    let watchListData = this.props.mainWatchListData;
    return (
      <>
        <h2>All Anime </h2>
        <div className="animeClass">
          {animeData.map((anime) => {
            const {
              id,
              name,
              rating,
              description,
              zoneDescription,
              genres,
              img,
            } = anime;

            //this adds picked anime into anime info array so that when a user goes to the anime info page ,the page will display info based on the anime info array
            const viewAnime = () => {
              this.props.viewAnime(anime);
            };
            return (
              <>
                <article id={id} className="anime">
                  <h2>{name}</h2>

                  <h3>Summary</h3>
                  <h3 id="summary"> {zoneDescription}</h3>

                  <Link to="/anime">
                    <button id="view" onClick={viewAnime}>
                      view more
                    </button>
                  </Link>

                  <div className="animeInfo">
                    <div className="animeAdd">
                      <img src={img} alt={name} onClick={viewAnime} />

                      <h2>Rating</h2>
                      <h2 id="rating">{rating}</h2>
                    </div>
                  </div>
                </article>
              </>
            );
          })}
        </div>
      </>
    );
  }
}
export default AllAnime;
