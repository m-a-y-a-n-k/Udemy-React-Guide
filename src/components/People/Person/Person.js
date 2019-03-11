import React, { Component } from "react";
import classes from "./Person.css";
import WithClass from "../../../hoc/WithClass";
import PropTypes from 'prop-types';

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputEleRef = React.createRef();
  }

  componentDidMount() {
    this.inputEleRef.current.focus();
  }

  render() {
    let fragment = (<React.Fragment>
      <span className={classes.del} onClick={this.props.click}>
        X
    </span>
      <span style={{ width: "100%" }}>
        <h5>
          Hi, My name is {this.props.name} and I am {this.props.age} years old!
      </h5>
      </span>
      <p>{this.props.children}</p>
      <input
        style={{
          textAlign: "center",
          padding: "2%",
          margin: "1%",
          width: "80%"
        }}
        ref={this.inputEleRef}
        type="text"
        onChange={this.props.changed}
        value={this.props.name}
      />
    </React.Fragment>);

    return (fragment);
  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default WithClass(Person, classes.Person);
