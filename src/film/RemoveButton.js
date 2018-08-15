import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class RemoveButton extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event){
    this.props.removeFilm(this.props.id);
    event.preventDefault()
  }

  render() {
    return (
      <Button color="secondary" onClick={this.handleClick}><DeleteIcon /></Button>
    )
  }
}

export default RemoveButton
