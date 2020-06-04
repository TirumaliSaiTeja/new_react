/* eslint-disable no-undef */
import React, { Component } from "react";

class GameForm extends Component {
  state = {
    name: "",
    description: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

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

        <button className="ui button" type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default GameForm;
