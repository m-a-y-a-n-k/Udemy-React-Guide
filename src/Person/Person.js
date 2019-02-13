import React from "react";
import classes from "./Person.css";

const person = props => {
  const delStytles = {
    margin: "1%",
    padding: "2%",
    color: "red",
    fontWeight: "bold",
    float: "right",
    display: "inline"
  };
  return (
    <div className={classes.Person}>
      <span style={delStytles} onClick={props.click}>
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
