import React from "react";
import classes from "./Person.css";

const person = props => {
  return (
    <div className={classes.Person}>
      <h5>
        <p onClick={props.click}>
          Hi, My name is {props.name} and I am {props.age} years old!
        </p>
      </h5>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
