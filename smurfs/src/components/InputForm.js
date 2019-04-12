import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  changeHandler = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    const { name, age, height } = this.state;
    this.props.addSmurf({ name, age, height });
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          onChange={this.changeHandler}
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
        />
        <input
          onChange={this.changeHandler}
          type="number"
          name="age"
          placeholder="Age"
          value={this.state.age}
        />
        <input
          onChange={this.changeHandler}
          type="text"
          name="height"
          placeholder="Height"
          value={this.state.height}
        />
        <button type="submit">+</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { error: state.error };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(InputForm);
