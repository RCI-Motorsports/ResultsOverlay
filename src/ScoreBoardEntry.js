import React, { Component } from 'react';
import { ENTRY_VISUAL_STATE } from './enums';



class ScoreBoardEntry extends Component {
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
            <div key={ `${this.props.entry.car.carId}` } className='Row'>
                <div className='ColumnNum'>{ this.props.entry.position }</div>
                <div className='ColumnNum'>{ this.props.entry.car.raceNumber }</div>
                <div className='Column'>{ text }</div>
                <div className='Column'>{ this.props.entry.carName }</div>
                <div className='Column'>{ this.props.entry.timing.bestLapFormatted }</div>
                <div className='Column'>{ this.props.entry.timing.timeDiffFormatted }</div>
            </div>
        );
    }
}

export default ScoreBoardEntry;