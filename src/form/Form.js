import React, { Component } from "react";



class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleSubmit(event) {
    this.props.addFilm(this.state.value);
    this.setState({ value: "" });
    event.preventDefault();
  }
  handleRemove(event) {
    this.props.removeFilm(this.state.value);
    this.setState({ value: "" });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Insira um filme</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Enviar" />
      </form>

    );
  }
}

export default Form;
