import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const People = (props) => (
    props.people.map((person, index) => {
        return (
            <ErrorBoundary key={person.id}>
                <Person
                    click={() => props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    changed={event => props.changed(event, person.id)}
                />
            </ErrorBoundary>
        );
    })
);

export default People;