import React, { Component } from 'react';
import { ENTRY_VISUAL_STATE } from '../enums';

class SessionResultEntry extends Component {
    constructor(props) {
        super(props);
    }

    sizeForDeficitLength = () => {
        if (this.props.entry.timing.deficit.length >= 9) {
            return 21;
        } else if (this.props.entry.timing.deficit.length === 8) {
            return 24;
        } else if (this.props.entry.timing.deficit.length === 7) {
            return 27;
        } else if (this.props.entry.timing.deficit.length <= 6) {
            return 30;
        }   
    }

    sizeForTimeLength = () => {
        if (this.props.entry.timing.bestLap.length >= 9) {
            return 27;
        } else if (this.props.entry.timing.bestLap.length === 8) {
            return 30;
        } else if (this.props.entry.timing.bestLap.length === 7) {
            return 33;
        } else if (this.props.entry.timing.bestLap.length <= 6) {
            return 36;
        }   
    }

    render() {
        
        let text = "";
        if (this.props.visualstate === ENTRY_VISUAL_STATE.TEAM) {
            text = this.props.entry.car.teamName;
        } else {
            text = this.props.entry.name;
        }

        return (
            <div key={ this.props.entry.car.carId } className={`Row SessionResultsRow-${this.props.entry.category}`}>
                <div className='SessionResultPositionCol'>{ this.props.entry.position }</div>
                <div className={`SessionResultCarNumberCol ${this.props.entry.category}`}>{ this.props.entry.carNumber }</div>
                <div className='SessionResultDriverCol'>{ text }</div>
                <div className='SessionResultCarCol'>{ this.props.entry.car }</div>
                <div className='SessionResultTimeCol' style={{fontSize: this.sizeForTimeLength()}}>{ this.props.entry.timing.bestLap }</div>
                <div className='SessionResultTimeDiffCol' style={{fontSize: this.sizeForDeficitLength()}}>{ this.props.entry.timing.deficit }</div>
            </div>
        );
    }
}

export default SessionResultEntry;