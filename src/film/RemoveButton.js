import React, { Component } from "react";
import Button from '@material-ui/core/Button';


class RemoveButton extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event){
    this.props.removeFilm(this.props.name);
    event.preventDefault()
  }

  render() {
    return (
      <Button color="secondary"onClick={this.handleClick}>Remover</Button>
    )
  }
}

export default RemoveButton
