/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";
import Featured from "./Featured";
import GameList from "./GameList";

const GameCard = ({ game }) => (
  <div className="ui card">
    <div className="image">
      <span className="ui green ribbon label">{game.price}</span>
      <Featured
        featured={game.featured}
        // eslint-disable-next-line no-undef
        toggleFeatured={toggleFeatured}
        gameId={game._id}
      />
      <img src={game.thumbnail} alt="Game cover" />
    </div>
    <div className="content">
      <a className="header">{game.name}</a>
      <div className="meta">
        <i className="icon users" />
        {game.users}&nbsp;
        <i className="icon wait" />
        {game.duration} mins.
      </div>
    </div>
  </div>
);

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    featured: PropTypes.bool.isRequired
  }).isRequired
};

export default GameCard;
