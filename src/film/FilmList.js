import React, { Component } from "react";
import Film from "./Film"

class FilmList extends Component {
  render() {
    const list = this.props.list;
    return (
      <ul>
        {list.map(film => (
          <li>
            <Film name={film.name} />
          </li>
        ))}
      </ul>
    );
  }
}


export default FilmList
