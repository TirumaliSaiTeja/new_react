/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

const Featured = ({ featured, toggleFeatured, gameId }) => (
  <span>
    {featured ? (
      <a
        onclick={() => toggleFeatured(gameId)}
        className="ui right yellow corner label"
      >
        <i className="star icon"></i>
      </a>
    ) : (
      <a
        onclick={() => toggleFeatured(gameId)}
        className="ui right corner label"
      >
        <i className="empty star icon"></i>
      </a>
    )}
  </span>
);

Featured.propTypes = {
  featured: PropTypes.bool.isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  gameId: PropTypes.number.isRequired
};

export default Featured;
