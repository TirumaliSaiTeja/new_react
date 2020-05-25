import React from "react";
import GameCard from "./GameCard";
import PropTypes from "prop-types";

const GameList = ({ games }) => (
  <div className="ui five cards">
    {games.map(game => (
      <GameCard game={game} key={game._id} />
    ))}
  </div>
);

GameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default GameList;
