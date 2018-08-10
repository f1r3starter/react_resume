// Core
import React from 'react';

export default (props) => {
    return (
        <div className = 'workplace'>
            <div className = 'leftColumn'>
                <span className = 'period'>{props.period}</span>
                <span className = 'position'>{props.position}</span>
            </div>
            <div className = 'rightColumn'>
                <span className = 'location'>{props.location}</span>
                <span className = 'company'>{props.company}</span></div>
        </div>
    );
};
