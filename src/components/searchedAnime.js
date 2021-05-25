import React from "react";
import animeFile from "./data/animeData.js";

import { Link } from "react-router-dom";

//this component handles the search functionality
class SearchedAnime extends React.Component {
  constructor(props) {
    super(props);

    this.showGenre = this.showGenre.bind(this);
    this.genreChange = this.genreChange.bind(this);
    this.genreSearch = this.genreSearch.bind(this);

    this.clearSearchResults = this.clearSearchResults.bind(this);

    this.nameChange = this.nameChange.bind(this);
    this.nameSearch = this.nameSearch.bind(this);
    this.state = {
      //will get values from form
      animeState: "",
      genrePicked: "Action ",
      name: "",
      searchListArray: [],
    };
  }

  genreChange(event) {
    this.setState({
      genrePicked: event.target.value,
    });
  }

  nameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }
  //this shows genre tab
  showGenre() {
    let genreTab = document.getElementById("genreTab");

    genreTab.style.display = "block";
  }
  //this searches for the genre that users picked. it goes through all the anime they picked , adds them into an array and sends it to another array which will be used in searchResults.js.
  genreSearch = async (e) => {
    e.preventDefault();
    let genre = this.state.genrePicked;

    let searchList = [];
    for (var i = 0; i < animeFile.length; i++) {
      if (animeFile[i].genres.includes(genre)) {
        searchList.push(animeFile[i]);
      }
    }
    this.props.searchFunction(searchList);
  };
  //this searches for all anime that match with the name the user provides, it then adds those anime into an array and sends it to another array which will be used in searchResults.js
  nameSearch = async (e) => {
    e.preventDefault();
    //this takes user input and capitalizes it so that it can match with the naming convention used in the anime data set

    const str = this.state.name;

    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const caps = str.split(" ").map(capitalize).join(" ");

    let input = caps;

    let searchList = [];
    for (var i = 0; i < animeFile.length; i++) {
      if (animeFile[i].name.includes(input)) {
        searchList.push(animeFile[i]);
      }
    }

    this.props.searchFunction(searchList);
  };

  clearSearchResults() {
    window.location.reload();
  }

  componentDidMount() {
    this.props.searchClear();

    //this hides the genre tab
    let genreTab = document.getElementById("genreTab");

    genreTab.style.display = "none";
  }

  render() {
    return (
      <>
        <div id="searchForms">
          <div id="genreTab">
            <label id="buttons">
              <input
                type="radio"
                value="Action "
                name="genre"
                onClick={this.genreChange}
              />
              Action
            </label>

            <label id="buttons">
              <input
                type="radio"
                value="Adventure "
                name="genre"
                onClick={this.genreChange}
              />
              Adventure
            </label>

            <label id="buttons">
              <input
                type="radio"
                value="Boxing "
                name="genre"
                onClick={this.genreChange}
              />
              Boxing
            </label>

            <label id="buttons">
              <input
                type="radio"
                value="Comedy "
                name="genre"
                onClick={this.genreChange}
              />
              Comedy
            </label>

            <label id="buttons">
              <input
                type="radio"
                value="Mystery "
                name="genre"
                onClick={this.genreChange}
              />
              Mystery
            </label>

            <label id="buttons">
              <input
                type="radio"
                value="Powers "
                name="genre"
                onClick={this.genreChange}
              />
              Powers
            </label>

            <label id="buttons">
              <input
                type="radio"
                value="Psychological "
                name="genre"
                onClick={this.genreChange}
              />
              Psychological
            </label>

            <label id="buttons">
              <input
                type="radio"
                value="Samurai "
                name="genre"
                onClick={this.genreChange}
              />
              Samurai
            </label>

            <label id="buttons">
              <input
                type="radio"
                value="School "
                name="genre"
                onClick={this.genreChange}
              />
              School
            </label>

            <label id="buttons">
              <input
                type="radio"
                value="Shounen "
                name="genre"
                onClick={this.genreChange}
              />
              Shounen
            </label>

            <label id="buttons">
              <input
                type="radio"
                value="Sport "
                name="genre"
                onClick={this.genreChange}
              />
              Sport
            </label>

            <label id="buttons">
              <input
                type="radio"
                value="Supernatural "
                name="genre"
                onClick={this.genreChange}
              />
              Supernatural
            </label>

            <label id="buttons">
              <input
                type="radio"
                value="Thriller "
                name="genre"
                onClick={this.genreChange}
              />
              Thriller
            </label>

            <label id="buttons">
              <input
                type="radio"
                value="Vampires "
                name="genre"
                onClick={this.genreChange}
              />
              Vampires
            </label>

            <div id="genreSearch">
              <label>
                Search for {this.state.genrePicked} Anime
                <a href="/#search">
                  <button className="searchButton" onClick={this.genreSearch}>
                    Search
                  </button>
                </a>
              </label>
            </div>
          </div>

          <div id="inputSearch">
            <button type="submit" onClick={this.showGenre}>
              Genre
            </button>

            <input
              type="text"
              placeholder="Search"
              onChange={this.nameChange}
              name="search"
            />
            <a href="/search#searchId">
              <button className="searchButton" onClick={this.nameSearch}>
                Search
              </button>
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default SearchedAnime;
