// Core
import React, { Component } from 'react';
import Skills from "./Skills";
import Workplaces from "./Workplaces";

export default class TopRow extends Component {
    render () {
        return (
            <div className = 'topRow'>
                <Skills />
                <Workplaces />
            </div>
        );
    }
}
