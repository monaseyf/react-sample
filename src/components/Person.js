import React from 'react';

function Person({person , key}) {
    return (
        <div>
            <h2>{person.name}  I am {person.age}</h2>
        </div>
    );
}

export default Person;

