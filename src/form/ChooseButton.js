import React, { Component } from "react";
// import Choser from "./Choser";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { getSorted } from "../actions";

const ChooseButton = ({ dispatch, list }) => {
  return (
    <Button
      onClick={event => {
        event.preventDefault();
        dispatch(getSorted());
      }}
    >
      Sortear
    </Button>
  );
};

export default connect()(ChooseButton);
