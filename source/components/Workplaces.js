// Core
import React, { Component } from 'react';

// Instruments
import workplaces from '../theme/assets/data/experience';

// Components
import Workplace from './Workplace';

export default class Workplaces extends Component {
    render () {
        const workplacesJSX = workplaces.map((workplace) => {
            return <Workplace company = { workplace.company } key = { workplace.id } location = { workplace.location } period = { workplace.period } position = { workplace.position } />;
        });

        return (
            <section>
                <section className = 'sectionHeading'>
                    <h1>
                        <span className = 'sectionNumber'>02.</span>
                        <span className = 'sectionName'>Опыт работы</span>
                    </h1>
                </section>
                {workplacesJSX}
            </section>
        );
    }
}
