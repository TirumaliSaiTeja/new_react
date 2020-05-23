import React from "react";
import { render } from "react-dom";
import "semantic-ui-css/semantic.min.css";
//import GameCard from "./components/GameCard.js";

const GameCard = function() {
  return (
    <div>
      <h1>Game Card</h1>
    </div>
  );
};

render(<GameCard />, document.getElementById("root"));
