import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { addFilm } from '../actions'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleSubmit(event) {
    debugger
    this.props.dispatch(addFilm(this.state.value));
    debugger
    this.setState({ value: "" });
    event.preventDefault();
  }
  handleRemove(event) {
    this.props.removeFilm(this.state.value);
    this.setState({ value: "" });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Typography variant='headline' component='h2'>Insira um filme</Typography>
        <TextField
          autoFocus
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />

      </form>
    );
  }
}

export default connect()(Form);
