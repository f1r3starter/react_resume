// Core
import React from 'react';

// Components
import Skillpoint from './Skillpoint';

export default (props) => {
    const skills = [];

    for (let i = 0; i < 9; i++) {
        skills.push((<Skillpoint active = { i < props.points } key = { i } />));
    }

    return (
        <div className = 'skill'><span>{props.title}</span>
            <ul>
                {skills}
            </ul>
        </div>
    );
};
