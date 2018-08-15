import React, { Component } from "react";
import Film from "./Film";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const choiceColor = "#239eb1";

const FilmList = ({ list, removeFilm }) => (
  <div>
    <List component="nav">
      {list.map(film => (
        <div key={film.id}>
          <Film
            color={film.isChoice ? choiceColor : ""}
            name={film.name}
            id={film.id}
            removeFilm={removeFilm}
          />
          <Divider />
        </div>
      ))}
    </List>
  </div>
);

export default FilmList;
