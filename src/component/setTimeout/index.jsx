import React, { useState, useEffect } from 'react';

const ChangeComponent = () => {
    const [component, setComponent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setComponent(true);
        }, 5000);

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {component ? <ComponentA /> : <ComponentB />}

        </div>
    );
};

const ComponentA = () => {
    return <h1>Component A</h1>;
};

const ComponentB = () => {
    return <h1>Component B</h1>;
};

export default ChangeComponent;