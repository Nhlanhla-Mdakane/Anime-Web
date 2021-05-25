import React from "react";
import { Link } from "react-router-dom";

//this Component displays all the anime the user has in their watch list , it also allows them to remove anime from the watch list
class WatchListAnime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //will get values from form
      animeState: "",
    };
  }
  componentDidMount() {
    this.props.watchListCount();
  }

  render() {
    let watchListData = this.props.mainWatchListData;
    return (
      <>
        <div id="heading">
          <h2 id="headingPhrase">Watch List</h2>
          <h3 id="watchListStatus">
            There are {this.props.amountWatch} anime in your watch list.
          </h3>
          <div />
          <div className="animeClass">
            {watchListData.map((anime) => {
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

              const deleteAnime = () => {
                setTimeout(resetState, 1500);

                this.props.watchListDelete(anime);
                this.setState({ animeState: "anime deleted" });
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
                    <br />
                    <button id="deleteButton" onClick={deleteAnime}>
                      remove
                    </button>

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
        </div>
      </>
    );
  }
}
export default WatchListAnime;
