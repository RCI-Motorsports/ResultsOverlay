import React, { Component } from 'react';
import ScoreBoardEntry from './ScoreBoardEntry';
import TrackMapping from './track_name_mapping.json';
import SessionMapping from './session_mapping.json';

class Scoreboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{TrackMapping[this.props.props.trackName]}</h1>
                <h3>{SessionMapping[this.props.props.sessionType]}</h3>
                {this.props.props.sessionResult.leaderBoardLines.map(entry => {
                        return (<ScoreBoardEntry key={entry.car.carId} props={entry} />)
                    })}
            </div>
        );
    }
}

export default Scoreboard;