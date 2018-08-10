// Core
import React from 'react';

export default (props) => {
    return (
        <li className = { props.active ? '' : 'inactive' } />
    );
};
