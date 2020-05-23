import React from "react";
import { render } from "react-dom";
import "semantic-ui-css/semantic.min.css";
import GameCard from "./components/GameCard.js";

const game = {
  name: "Battle Field",
  thumbnail:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSW68T5TAd6U9ZgreKMKSDG5iwfuSPJswtwfaR2Om6_w0XNYQEK&usqp=CAU",
  users: "2-4",
  duration: "60",
  price: "43.43"
};
render(<GameCard game={game} />, document.getElementById("root"));
