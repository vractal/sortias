import React from "react";
import RemoveButton from './RemoveButton'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


// Film component, name type: string

export default ({color='white',...props}) => (
  <ListItem style={{ backgroundColor: color}} elevation={2}>
    <ListItemText>{props.name}{props.color}</ListItemText>
      <RemoveButton id={props.id} removeFilm={props.removeFilm}   />


  </ListItem>


);
