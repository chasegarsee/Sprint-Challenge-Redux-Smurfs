import React, { Component } from "react";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import { connect } from "react-redux";
import { getSmurfs, deleteSmurf } from "../actions";
import SmurfList from "./SmurfList.js";
import InputForm from "./InputForm";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  deleteItem = (event, index) => {
    event.preventDefault();
    this.props.deleteSmurf(index);
  };
  render() {
    return (
      <div className="App">
        <h1>SMURTHS</h1>
        <InputForm />
        <SmurfList delete={this.deleteItem} smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, deleteSmurf }
)(App);
