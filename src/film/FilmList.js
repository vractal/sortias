import React, { Component } from "react";
import Film from "./Film";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


class FilmList extends Component {
  render() {
    const list = this.props.list;
    const removeFilm = this.props.removeFilm;
    return (
      <List>
        {list.map(film => (
          <ListItem>

            <Film name={film.name} removeFilm={removeFilm}></Film>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default FilmList;
