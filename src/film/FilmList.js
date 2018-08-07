import React, { Component } from "react";
import Film from "./Film";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

class FilmList extends Component {
  render() {
    // const { classes } = this.props;
    const list = this.props.list;
    const removeFilm = this.props.removeFilm;
    const choiceColor = "#e91e63";

    return (
      <div>
        <List component="nav">
          {list.map(film => (
            <div>
              <Film
                color={film.isChoice ? choiceColor : ""}
                name={film.name}
                removeFilm={removeFilm}
              />
              <Divider />
            </div>
          ))}
        </List>
      </div>
    );
  }
}

export default FilmList;
