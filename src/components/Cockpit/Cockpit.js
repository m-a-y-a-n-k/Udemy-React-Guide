import React from 'react';
import Classes from './Cockpit.css';

const cockpit = (props) => {
    let classes = [];
    let btnClass = "";

    if (props.showPeople) {
        btnClass = Classes.Red;
    }

    if (props.people.length < 3) {
        classes.push(Classes.red);
        if (props.people.length <= 1) {
            classes.push(Classes.bold);
        }
    }

    return (
        <div className={Classes.Cockpit}>
            <h1>Hi , I am a React App !!</h1>
            <p className={classes.join(" ")}>This is really working</p>
            <button
                className={btnClass}
                onClick={props.clicked}
            >
                Toggle People
            </button>
        </div>
    );
}


export default cockpit;