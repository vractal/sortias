import React, { Component } from "react";

class Film extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p> Descrição do filme</p>
      </div>
    );
  }
}

export default Film;
