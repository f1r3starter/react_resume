// Core
import React, { Component } from 'react';

// Instruments
import educations from '../theme/assets/data/education';

// Components
import Education from './Education';

export default class Educations extends Component {
    render () {
        const educationsJSX = educations.map((education) => {
            return <Education degree = { education.degree } eduspace = { education.eduspace } key = { education.id } period = { education.period } />;
        });

        return (
            <div className = 'education'>
                <section className = 'sectionHeading'>
                    <h1>
                        <span className = 'sectionNumber'>04.</span>
                        <span className = 'sectionName'>Образование</span>
                    </h1>
                </section>
                {educationsJSX}
                <span className = 'copyright'>2018 © Андрей Филенко</span>
            </div>
        );
    }
}
