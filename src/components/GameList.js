import React from "react";
import GameCard from "./GameCard";
import PropTypes from "prop-types";

const GameList = ({ games }) => (
  <div className="ui five cards">
    {games.length === 0 ? (
      <div className="ui icon message">
        <i className="icon info" />
        <div className="content">
          <div className="header">There are no games in your store.</div>
          <p>You need to add to your system</p>
        </div>
      </div>
    ) : (
      games.map(game => <GameCard game={game} key={game._id} />)
    )}
  </div>
);

GameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default GameList;
