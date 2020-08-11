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
            <div key={ this.props.entry.car.carId } className={this.props.style}>
                <h5>{ text }</h5><h5>{ this.props.entry.timing.bestLap }</h5>
            </div>
        );
    }
}

export default ScoreBoardEntry;