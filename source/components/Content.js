// Core
import React, { Component } from 'react';

// Components
import TopRow from './TopRow';
import BottomRow from './BottomRow';

export default class Content extends Component {
    render () {
        return (
            <div className = 'content'>
                <div>
                    <TopRow />
                    <BottomRow />
                </div>
            </div>
        );
    }
}
