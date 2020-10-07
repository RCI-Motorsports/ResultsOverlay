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
            text = this.props.entry.currentDriver.firstName + " " + this.props.entry.currentDriver.lastName;
        }

        return (
            <div key={ this.props.entry.car.carId } className='SessionResultRow'>
                <div className='PositionCol'>{ this.props.entry.position }</div>
                <div className='CarnumberCol'>{ this.props.entry.car.raceNumber }</div>
                <div className='DriverCol'>{ text }</div>
                <div className='CarCol'>{ this.props.entry.carName }</div>
                <div className='TimeCol'>{ this.props.entry.timing.bestLapFormatted }</div>
                <div className='TimeDiffCol'>{ this.props.entry.timing.timeDiffFormatted }</div>
            </div>
        );
    }
}

export default SessionResultEntry;