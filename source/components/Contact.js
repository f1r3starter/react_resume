// Core
import React from 'react';

export default (props) => {
    return (
        <div className = 'contact'>
            <span className = 'action'>{props.action}</span>
            <span className = 'address'>{props.address}</span>
        </div>
    );
};
