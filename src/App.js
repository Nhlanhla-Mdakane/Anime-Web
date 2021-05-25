import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AllAnime from "./components/allAnime.js";
import Anime from "./components/anime.js";
import About from "./components/about.js";
import WatchListAnime from "./components/watchListAnime.js";
import SearchedAnime from "./components/searchedAnime.js";
import SearchResults from "./components/searchResults.js";
import Header from "./components/header.js";
import Nav from "./components/nav.js";
import BottomNav from "./components/bottomNav.js";
import RecAnime from "./components/recAnime.js";
import Error from "./components/error.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.viewAnime = this.viewAnime.bind(this);

    this.watchListAdd = this.watchListAdd.bind(this);
    this.watchListCount = this.watchListCount.bind(this);
    this.watchListDelete = this.watchListDelete.bind(this);
    this.searchFunction = this.searchFunction.bind(this);
    this.searchClear = this.searchClear.bind(this);

    this.state = {
      watchList: [],
      searchListArray: [],
      amountWatch: 0,
      animeIn: [],
    };
  }
  //this adds anime user selected into array which will be used to display more anime info to the user
  viewAnime(anime) {
    this.setState({
      animeIn: [anime],
    });
  }

  //this adds anime to watch list

  watchListAdd(anime) {
    this.setState({
      watchList: [...this.state.watchList, anime],
    });
  }

  //this deletes anime from watchlist array
  watchListDelete(anime) {
    const watchListNewArray = this.state.watchList.filter(
      (animeElement) => animeElement.id !== anime.id
    );
    this.setState({
      watchList: watchListNewArray,
    });

    this.setState({
      amountWatch: watchListNewArray.length,
    });
  }
  //this counts how many anime are in the watchlist
  watchListCount() {
    this.setState({
      amountWatch: this.state.watchList.length,
    });
  }
  //this sets the search list array

  searchFunction(searchList) {
    this.setState({
      searchListArray: searchList,
    });
  }

  //this clears search list array
  searchClear() {
    this.setState({
      searchListArray: [],
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Nav />

          <Switch>
            <Route exact path="/">
              <AllAnime
                viewAnime={this.viewAnime}
                watchListAdd={this.watchListAdd}
                mainWatchListData={this.state.watchList}
              />
            </Route>

            <Route exact path="/WatchList">
              <WatchListAnime
                viewAnime={this.viewAnime}
                watchListDelete={this.watchListDelete}
                watchListCount={this.watchListCount}
                mainWatchListData={this.state.watchList}
                amountWatch={this.state.amountWatch}
              />
            </Route>

            <Route exact path="/Recommended">
              <RecAnime
                viewAnime={this.viewAnime}
                watchListAdd={this.watchListAdd}
                mainWatchListData={this.state.watchList}
              />
            </Route>

            <Route exact path="/search">
              <SearchedAnime
                viewAnime={this.viewAnime}
                watchListAdd={this.watchListAdd}
                mainWatchListData={this.state.watchList}
                searchFunction={this.searchFunction}
                searchClear={this.searchClear}
                searchData={this.state.searchListArray}
              />

              <SearchResults
                viewAnime={this.viewAnime}
                watchListAdd={this.watchListAdd}
                mainWatchListData={this.state.watchList}
                searchData={this.state.searchListArray}
              />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/anime">
              <Anime
                watchListAdd={this.watchListAdd}
                mainWatchListData={this.state.watchList}
                animeIn={this.state.animeIn}
              />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>

          <BottomNav />
        </Router>
      </div>
    );
  }
}

export default App;
