import React, { Component } from "react";
import GameList from "./GameList";
import { thisExpression } from "@babel/types";
import _orderBy from "lodash/orderBy";

const games = [
  {
    _id: "1",
    featured: true,
    name: "Batte Field",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSW68T5TAd6U9ZgreKMKSDG5iwfuSPJswtwfaR2Om6_w0XNYQEK&usqp=CAU",
    users: "2-4",
    duration: 60,
    price: 43.43
  },

  {
    _id: "2",
    featured: false,
    name: "PUBG",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsSTfhZXGMj5axWItkWPRZ3hny82YZRztpfgVV7jDLXwm1v3TL&usqp=CAU",
    users: "2-4",
    duration: 60,
    price: 50.65
  },

  {
    _id: "3",
    featured: false,
    name: "Call off duty",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJavK35PIfco2W7E2QUSVYMvXjXBF5JiBPfeiZGrMASDZx2zMJ&usqp=CAU",
    users: "2-4",
    duration: 60,
    price: 49.43
  }
];

class App extends React.Component {
  //Defining state using constructor
  /*constructor(props) {
    super(props);
    this.state = {
      games: []
    };
    this.toggleFeatured = this.toggleFeatured.bind(this) 
  }*/

  state = {
    games: []
  };

  // we call this hook method, when app component is ready to mount
  componentDidMount() {
    this.setState({
      games: this.sortGames(games)
    });
  }

  sortGames(games) {
    return _orderBy(games, ["featured", "name"], ["desc", "asc"]);
  }
  /* one way of declaring toggle function 
  toggleFeatured= gameId =>   {
    const newGames=  this.state.games.map(game => {
      if (game._id === gameId) return { ...game, featured: !game.featured};
      return game;
    });   
    this.setState ({games : this.sortGames(newGames)})
  }*/
  //Second Method
  toggleFeatured = gameId =>
    this.setState({
      games: this.sortGames(
        this.state.games.map(game =>
          gameId === game.id ? { ...game, featured: !game.featured } : game
        )
      )
    });

  render() {
    return (
      <div className="ui container">
        <GameList
          games={this.state.games}
          toggleFeatured={this.toggleFeatured}
        />
      </div>
    );
  }
}

export default App;
