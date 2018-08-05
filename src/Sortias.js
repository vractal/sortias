import React, { Component } from "react";
import Form from "./form/Form";
import FilmList from "./film/FilmList";

class Sortias extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
    this.addFilm = this.addFilm.bind(this);
  }

  addFilm(name) {
    this.setState({ list: [...this.state.list, { name: name}] });
  }

  render() {
    const list = this.state.list;
    return (
      <div>
        <Form addFilm={this.addFilm} />
        <FilmList list={list} />

      </div>

    );
  }
}

export default Sortias;
