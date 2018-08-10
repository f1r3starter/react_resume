// Core
import React, { Component } from 'react';

// Components
import Contacts from './Contacts';
import Educations from './Educations';

export default class BottomRow extends Component {
    render () {
        return (
            <div className = 'bottomRow'>
                <Contacts />
                <Educations />
            </div>
        );
    }
}
