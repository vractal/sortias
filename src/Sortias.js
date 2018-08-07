import React, { Component } from "react";
import Form from "./form/Form";
import FilmList from "./film/FilmList";
import ChooseButton from "./form/ChooseButton";
import Paper from "@material-ui/core/Paper";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Sortias extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
    this.addFilm = this.addFilm.bind(this);
    this.removeFilm = this.removeFilm.bind(this);
    this.choser = this.choser.bind(this);
  }

  addFilm(name) {
    this.setState({ list: [...this.state.list, { name: name }] });
  }

  removeFilm(name) {
    const lista = this.state.list.filter(item => item.name !== name);
    this.setState({ list: [...lista] });
  }
  choser(list) {
    const pick = list[Math.floor(Math.random() * list.length)]
    const newList = list.map(item => {
      var obj = {};
      obj.name = item.name;
      obj.isChoice = item.name === pick.name ? true : false;
      return obj;
    });
    this.setState({ list: newList });
  }

  render() {
    const list = this.state.list;
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={2}>
          <Form addFilm={this.addFilm} />
          <ChooseButton list={list} choser={this.choser} />
          <FilmList removeFilm={this.removeFilm} list={list} />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Sortias);
