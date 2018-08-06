import React from "react";
import RemoveButton from './RemoveButton'
// Film component, name type: string

export default props => (
  <div>
    <h1>{props.name}</h1>
    <RemoveButton name={props.name} removeFilm={props.removeFilm}  />
    <p> Descrição do filme</p>
  </div>
);
