// Core
import React, { Component } from 'react';

export default class Header extends Component {
    render () {
        return (
            <div className = 'header'>
                <div>
                    <h1>Andrey Filenko</h1>
                    <span>Backend developer</span>
                    <p>Want to understand all those tricky frontend things</p>
                </div>
                <img src = { require('../theme/assets/images/photo.jpg') } />
            </div>
        );
    }
}
