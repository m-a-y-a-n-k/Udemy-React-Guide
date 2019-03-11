import React from 'react';

const WithClass = (WrappedComponent, cName) => {
    return props => <div className={cName}>
        <WrappedComponent {...props} />
    </div>;
}

export default WithClass;