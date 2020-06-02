/* eslint-disable no-undef */
import React, { Component } from "react";

class GameForm extends Component {
  state = {
    name: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleNameChange = e => this.setState({ name: e.target.value });

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlfor="name">Game Title</label>
          <input
            type="text"
            id="name"
            placeholder="Full game title"
            //ref={input => (this.name = input)}
            value={this.state.name}
            onChange={this.handleNameChange}
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
