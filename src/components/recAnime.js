import React from "react";
import { Link } from "react-router-dom";
import recAnimeFile from "./data/recAnimeData.js";

let animeData = recAnimeFile;
//this page is similar to the all anime page but it only displays anime I would recommend for new anime viewers

class RecAnime extends React.Component {
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
        <h2>Recommended Anime </h2>
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

            const resetState = () => {
              this.setState({ animeState: "" });
            };

            const viewAnime = () => {
              this.props.viewAnime(anime);
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
export default RecAnime;
