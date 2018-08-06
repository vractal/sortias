import React, { Component } from "react";
import Form from "./form/Form";
import FilmList from "./film/FilmList";
import ChooseButton from "./form/ChooseButton";

class Sortias extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
    this.addFilm = this.addFilm.bind(this);
    this.removeFilm = this.removeFilm.bind(this);
  }

  addFilm(name) {
    this.setState({ list: [...this.state.list, { name: name }] });
  }

  removeFilm(name) {
    const lista = this.state.list.filter(item => item.name !== name);
    this.setState({ list: [...lista] });
  }

  render() {
    const list = this.state.list;
    return (
      <div>
        <Form addFilm={this.addFilm} />
        <ChooseButton list={list} />
        <FilmList removeFilm={this.removeFilm} list={list} />
      </div>
    );
  }
}

export default Sortias;
