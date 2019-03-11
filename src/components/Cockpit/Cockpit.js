import React, { useEffect, useRef, useContext } from 'react';
import Classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    let classes = [];
    let btnClass = "";

    if (props.showPeople) {
        btnClass = Classes.Red;
    }

    if (props.length < 3) {
        classes.push(Classes.red);
        if (props.length <= 1) {
            classes.push(Classes.bold);
        }
    }

    useEffect(() => {
        toggleBtnRef.current.click();
    }, []);

    return (
        <div className={Classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(" ")}>This is really working</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}
            >
                Toggle People
            </button>
            <div
                style={{
                    margin: "1%",
                    padding: "1%",
                }}
            >
                {
                    <button onClick={authContext.login}>Log In</button>
                }
            </div>
        </div>
    );
}

export default React.memo(cockpit);
