// Core
import React, { Component } from 'react';

// Instruments
import skills from '../theme/assets/data/skillset';

// Components
import Skill from './Skill';

export default class Skills extends Component {
    render () {
        const skillsJSX = skills.map((skill) => {
            return <Skill key = { skill.id } points = { skill.points } title = { skill.title } />;
        });

        return (
            <section className = 'skillset'>
                <section className = 'sectionHeading'>
                    <h1>
                        <span className = 'sectionNumber'>01.</span>
                        <span className = 'sectionName'>Набор скилов</span>
                    </h1>
                </section>
                {skillsJSX}
            </section>
        );
    }
}
