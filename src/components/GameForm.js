/* eslint-disable no-undef */
import React, { Component } from "react";
import { parse } from "@babel/core";

class GameForm extends Component {
  state = {
    name: "",
    description: "",
    price: 0,
    duration: 0,
    players: ""
  };

  // event handlers

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = e =>
    this.setState({
      [e.target.name]:
        e.target.type === "number"
          ? parseInt(e.target.value, 10)
          : e.target.value
    });

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlfor="name">Game Title</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full game title"
            //ref={input => (this.name = input)}
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>

        <div className="field">
          <label htmlfor="description">Game Description</label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Full game description"
            //ref={input => (this.name = input)}
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>
        <div className="three fields">
          <div className="field">
            <label htmlfor="price">Price (in cents)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label htmlfor="duration">Duration (in mins)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={this.state.duration}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label htmlfor="players">Players</label>
            <input
              type="text"
              id="players"
              name="players"
              value={this.state.players}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <button className="ui button" type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default GameForm;
