import React from "react";

const GameCard = () => (
  <div className="ui card">
    <div className="image">
      <span className="ui green ribbon label">$43.43</span>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSW68T5TAd6U9ZgreKMKSDG5iwfuSPJswtwfaR2Om6_w0XNYQEK&usqp=CAU"
        alt="Game cover"
      />
    </div>
    <div className="content">
      <a href="#" className="header">
        "Battle field"
      </a>
      <div className="meta">
        <i className="icon-users" />
        2-4&nbsp;
        <i className="icon-wait" />
        60mins;
      </div>
    </div>
  </div>
);

export default GameCard;
