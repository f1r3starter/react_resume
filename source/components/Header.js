// Core
import React, { Component } from 'react';

// Instruments
import photo from '../theme/assets/images/photo.jpg';

export default class Header extends Component {

    render () {
        return (
            <div className = 'header'>
                <div>
                    <h1>Andrey Filenko</h1>
                    <span>Backend developer</span>
                    <p>Want to understand all those tricky frontend things</p>
                </div>
                <img src = { photo } />
            </div>
        );
    }
}
