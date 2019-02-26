import React, { Component } from "react";
import Classes from "./App.css";
import People from "../components/People/People";
import Cockpit from "../components/Cockpit/Cockpit";

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

    if (this.state.showPeople) {
      people = (
        <People people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={Classes.App}>
        <Cockpit
          showPeople={this.state.showPeople}
          people={this.state.people}
          clicked={this.togglePersonsHandler}
        />
        {people}
      </div>
    );
  }
}

export default App;
