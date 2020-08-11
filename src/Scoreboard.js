import React, { Component } from 'react';
import ScoreboardEntryList from './ScoreboardEntryList';
import { ENTRY_VISUAL_STATE } from './enums';

const STATE = {
    DRIVER: "driver",
    TEAM: "team"
}

class Scoreboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0,
            visState: ENTRY_VISUAL_STATE.DRIVER
        }
    }

    _handleKeyDown = (event) => {
        if (event.keyCode === 81) {
            let newPage = this.state.currentPage + 1;
            if (newPage === this.props.props.leaderboard.length) {
                newPage = 0;
            }
            
            this.setState({currentPage: newPage})
        } else if (event.keyCode === 87) {
            if (this.state.visState === ENTRY_VISUAL_STATE.TEAM) {
                this.setState({ visState: ENTRY_VISUAL_STATE.DRIVER });
            } else if (this.state.visState === ENTRY_VISUAL_STATE.DRIVER) {
                this.setState({ visState: ENTRY_VISUAL_STATE.TEAM });
            }
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this._handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this._handleKeyDown);
    }

    render() {
        const scoreBoardEntryList = <ScoreboardEntryList entries={this.props.props.leaderboard[this.state.currentPage]} visualstate={this.state.visState} />;

        return (
            <div>
                <h1>{this.props.props.track}</h1>
                <h3>{this.props.props.session}</h3>
                {scoreBoardEntryList}
            </div>
        );
    }
}

export default Scoreboard;