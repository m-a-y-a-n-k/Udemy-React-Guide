import React, { PureComponent } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import AuthContext from '../../context/auth-context';
import Aux from '../../hoc/Auxiliary';

class People extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log("Get Derived State from Props in PEOPLE Component");
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("People :=> Should Component Update");
    //     return (nextProps.people !== this.props.people)
    //         ||
    //         (nextProps.changed !== this.props.changed)
    //         ||
    //         (nextProps.clicked !== this.props.clicked);
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("People :=> get snapshot before update");
        return prevProps.people.map(ob => {
            return ob.name;
        });
    }

    componentDidUpdate(prevProps, prevSatte, snapshot) {
        console.log("People :=> Component did Update", snapshot);
    }

    componentWillUnmount() {
        console.log("People :=> Component will Unmount");
    }

    static contextType = AuthContext;

    componentDidMount() {
        console.log("People :=> Component Did Mount");
        console.log(this.context.auth);
    }

    render() {
        console.log("Rendering People");
        let component = (
            <Aux>
                {
                    this.context.auth ? <p>Authenticated</p> : <p>Please log in</p>
                }
                {
                    this.props.people.map((person, index) => {
                        return (
                            <ErrorBoundary key={person.id}>
                                <Person
                                    click={() => this.props.clicked(index)}
                                    name={person.name}
                                    age={person.age}
                                    changed={event => this.props.changed(event, person.id)}
                                />
                            </ErrorBoundary>
                        );
                    })
                }
            </Aux >
        );

        return (component);
    }
}

export default People;