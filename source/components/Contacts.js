// Core
import React, { Component } from 'react';

// Instruments
import contacts from '../theme/assets/data/contacts';

// Components
import Contact from './Contact';

export default class Contacts extends Component {
    render () {
        const contactsJSX = contacts.map((contact) => {
            return <Contact action = { contact.action } address = { contact.address } key = { contact.id } />;
        });

        return (
            <div className = 'contacts'>
                <section className = 'sectionHeading'>
                    <h1>
                        <span className = 'sectionNumber'>03.</span>
                        <span className = 'sectionName'>Контакты</span>
                    </h1>
                </section>
                {contactsJSX}
            </div>
        );
    }
}
