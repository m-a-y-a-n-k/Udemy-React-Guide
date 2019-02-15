import React, { Component } from "react";
import Classes from "./App.css";
import Person from "../components/People/Person/Person";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    people: [
      { id: "asjhkd", name: "Sachin", age: 28 },
      { id: "sdaiof", name: "Virat", age: 21 },
      { id: "nkassm", name: "Dhoni", age: 26 }
    ],
    showPeople: false
  };

  deletePersonHandler = pIndex => {
    const people = [...this.state.people];
    people.splice(pIndex, 1);
    this.setState({ people });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(person => {
      return id === person.id;
    });
    const person = {
      ...this.state.people[personIndex]
    };
    person.name = event.target.value;
    const people = [...this.state.people];
    people[personIndex] = person;
    this.setState({ people });
  };

  togglePersonsHandler = () => {
    this.setState({ showPeople: !this.state.showPeople });
  };

  render() {
    let people = null;
    let btnClass = "";

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={event => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      btnClass = Classes.Red;
    }

    let classes = [];

    if (this.state.people.length < 3) {
      classes.push(Classes.red);
      if (this.state.people.length <= 1) {
        classes.push(Classes.bold);
      }
    }

    return (
      <div className={Classes.App}>
        <h1>Hi , I am a React App !!</h1>
        <p className={classes.join(" ")}>This is really working</p>
        <button
          className={btnClass}
          onClick={() => {
            this.togglePersonsHandler();
          }}
        >
          Toggle People
        </button>
        {people}
      </div>
    );
  }
}

export default App;
