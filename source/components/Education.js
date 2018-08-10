// Core
import React from 'react';

export default (props) => {
    return (
        <div className = 'eduspace'>
            <span className = 'period'>{props.period}</span>
            <span className = 'eduspace'>{props.eduspace}</span>
            <span className = 'degree'>{props.degree}</span>
        </div>
    );
};
