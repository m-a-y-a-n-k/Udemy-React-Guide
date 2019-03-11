import React, { Component } from "react";
import Classes from "./App.css";
import People from "../components/People/People";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("Constructor for App");
    this.state = {
      people: [
        { id: "asjhkd", name: "Sachin", age: 28 },
        { id: "sdaiof", name: "Virat", age: 21 },
        { id: "nkassm", name: "Dhoni", age: 26 }
      ],
      showPeople: false,
      changeCounter: 0,
      authenticated: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("GET DERIVED STATE FROM PROPS => ", props);
    return state;
  }

  componentDidMount() {
    console.log("App Component did mount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Component Update");
    return true;
  }

  componentDidUpdate() {
    console.log("Component Did Update");
    return true;
  }

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
    this.setState((prevState, props) => {
      return {
        people: people,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  togglePersonsHandler = () => {
    this.setState({ showPeople: !this.state.showPeople });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log("RENDER APP");

    let people = null;

    if (this.state.showPeople) {
      people = (
        <People people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          auth={this.state.authenticated}
        />
      );
    }
    let aux = (<Aux>
      <AuthContext.Provider
        value={{
          auth: this.state.authenticated,
          login: this.loginHandler
        }}
      >
        <Cockpit
          title={this.props.title}
          showPeople={this.state.showPeople}
          length={this.state.people.length}
          clicked={this.togglePersonsHandler}
        />
        {people}
      </AuthContext.Provider>
    </Aux>);

    return aux;
  }
}

export default WithClass(App, Classes.App);