// This file was used to learn about the "useState" hook in React.

import React, {useState} from 'react';

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Ryan");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const employ = () => {
        setIsEmployed(true);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Incremenet Age</button>

            <p>Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={employ}>Employ</button>
        </div>
    )
}

export default MyComponent;