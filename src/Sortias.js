import React, { Component } from "react";
import Form from "./form/Form";
import FilmListContainer from "./containers/FilmListContainer";
import ChooseButton from "./form/ChooseButton";
import Paper from "@material-ui/core/Paper";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Sortias extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], maxId: 0};
  }



  render() {
    const list = this.props.list;
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={2}>
          <Form />
          <ChooseButton />
          <FilmListContainer />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Sortias);
