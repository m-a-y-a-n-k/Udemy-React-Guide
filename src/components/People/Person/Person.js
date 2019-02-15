import React from "react";
import classes from "./Person.css";

const person = props => {
  
  return (
    <div className={classes.Person}>
      <span className = {classes.del} onClick={props.click}>
        X
      </span>
      <span style={{ width: "100%" }}>
        <h5>
          Hi, My name is {props.name} and I am {props.age} years old!
        </h5>
      </span>
      <p>{props.children}</p>
      <input
        style={{
          textAlign: "center",
          padding: "2%",
          margin: "1%",
          width: "80%"
        }}
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
};

export default person;
