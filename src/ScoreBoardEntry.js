import React, { Component } from 'react';

const STATE = {
    DRIVER: "driver",
    TEAM: "team"
}

class ScoreBoardEntry extends Component {
    entryString;
    constructor(props) {
        super(props);
        this.state = { visState: STATE.TEAM };
        this.entryString = this.props.props.car.teamName;
    }

    _handleKeyDown = (event) => {
        if (event.keyCode === 32) {
            if (this.state.visState === STATE.TEAM) {
                const driverName = this.props.props.currentDriver.firstName + " " + this.props.props.currentDriver.lastName;
                this.entryString = driverName;
                this.setState({ visState: STATE.DRIVER });
            } else if (this.state.visState === STATE.DRIVER) {
                this.entryString = this.props.props.car.teamName;
                this.setState({ visState: STATE.TEAM });
            }
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this._handleKeyDown);
    }

    render() {
        return (
            <div key={ this.props.props.car.carId } className='div-entry'>
                <h5>{ this.entryString }</h5>
                <h5>{ this.props.props.timing.bestLap }</h5>
            </div>
        );
    }
}

export default ScoreBoardEntry;