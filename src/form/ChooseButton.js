import React, { Component } from "react";
// import Choser from "./Choser";
import Button from "@material-ui/core/Button";

class ChooseButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.props.choser(this.props.list)
  
    event.preventDefault()
  }
  render() {
    return <Button onClick={this.handleClick}>Sortear</Button>;
  }
}

export default ChooseButton;
