import React from "react";
import GameList from "./GameList";

const games = [
  {
    _id: "1",
    name: "Battle Field",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSW68T5TAd6U9ZgreKMKSDG5iwfuSPJswtwfaR2Om6_w0XNYQEK&usqp=CAU",
    users: "2-4",
    duration: "60",
    price: "43.43"
  },

  {
    _id: "2",
    name: "PUBG",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsSTfhZXGMj5axWItkWPRZ3hny82YZRztpfgVV7jDLXwm1v3TL&usqp=CAU",
    users: "2-4",
    duration: "60",
    price: "50.65"
  },

  {
    _id: "3",
    name: "Call off duty",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJavK35PIfco2W7E2QUSVYMvXjXBF5JiBPfeiZGrMASDZx2zMJ&usqp=CAU",
    users: "2-4",
    duration: "60",
    price: "49.43"
  }
];

const App = () => (
  <div className="ui container">
    <GameList games={games} />
  </div>
);

export default App;
