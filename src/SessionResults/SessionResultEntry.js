import React, { Component } from 'react';
import { ENTRY_VISUAL_STATE } from '../enums';

class SessionResultEntry extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        let text = "";
        if (this.props.visualstate === ENTRY_VISUAL_STATE.TEAM) {
            text = this.props.entry.car.teamName;
        } else {
            text = this.props.entry.name;
        }

        return (
            <div key={ this.props.entry.car.carId } className='Row SessionResultRow'>
                <div className='PositionCol'>{ this.props.entry.position }</div>
                <div className='CarnumberCol'>{ this.props.entry.carNumber }</div>
                <div className='DriverCol'>{ text }</div>
                <div className='CarCol'>{ this.props.entry.car }</div>
                <div className='TimeCol'>{ this.props.entry.timing.bestLap }</div>
                <div className='TimeDiffCol'>{ this.props.entry.timing.deficit }</div>
            </div>
        );
    }
}

export default SessionResultEntry;