import React, { Component } from 'react';
import ScoreBoardEntry from './ScoreBoardEntry';

class ScoreboardEntryList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.entries.map((entry, idx) => {
                        return (<ScoreBoardEntry key={entry.car.carId} entry={entry} visualstate={this.props.visualstate} style={ idx%2===0?'div-entry-1':'div-entry-2'} />)
                    })}
            </div>
        );
    }
}

export default ScoreboardEntryList;