import React from "react";
import animeFile from "./data/animeData.js";

import { Link } from "react-router-dom";

/*
This page is gets data from the animeIn array(which contains the anime the user clicked view more on)
 and displays it to the user , it then allows user to add the anime in the array to their own watch list
*/

class Anime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //will get values from form
      animeState: "",
    };
  }

  render() {
    //watchlist data needed for when user finds anime and needs to add to watch list from search category
    let watchListData = this.props.mainWatchListData;

    return (
      <>
        <div id="animeDPageDiv">
          {this.props.animeIn.map((anime) => {
            const {
              id,
              name,
              rating,
              description,
              zoneDescription,
              genres,
              img,
            } = anime;

            const resetState = () => {
              this.setState({ animeState: "" });
            };

            const addAnime = () => {
              setTimeout(resetState, 1500);

              if (watchListData.includes(anime) === true) {
                this.setState({ animeState: "anime already added" });
                alert(JSON.stringify(watchListData));
              } else {
                this.props.watchListAdd(anime);
                this.setState({ animeState: "anime added" });
              }
            };
            return (
              <>
                <article id={id}>
                  <div className="animePage">
                    <div className="animeLeft">
                      <h2>{name}</h2>

                      <h3>Summary</h3>

                      <h3 id="summary"> {zoneDescription}</h3>

                      <img src={img} alt={name} />

                      <h2>{this.state.animeState}</h2>
                      <button id="addButton" onClick={addAnime}>
                        Add to Watch List
                      </button>
                    </div>

                    <div className="animeRight">
                      <h2>Rating</h2>
                      <h2 id="rating">{rating}</h2>

                      <h4 id="genre">Genre: {genres}</h4>

                      <h2>Description</h2>
                      <p>{description}</p>
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
export default Anime;
