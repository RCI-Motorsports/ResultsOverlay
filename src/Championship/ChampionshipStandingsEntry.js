import React, { Component } from 'react';

class ChampionshipStandingsEntry extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div className={`Row ChampionshipStandingsRow-${this.props.entry.category}`}>
                <div className='ChampionshipStandingsPositionCol'>{ this.props.entry.position }</div>
                <div className={`ChampionshipStandingsCarNumCol ${this.props.entry.category}`}>{ this.props.entry.carNumber }</div>
                <div className='ChampionshipStandingsNameCol'>{ this.props.entry.name }</div>
                <div className='ChampionshipStandingsCarCol'>{ this.props.entry.car }</div>
                <div className='ChampionshipStandingsPointsCol'>{ this.props.entry.points }</div>
            </div>
        );
    }
}

export default ChampionshipStandingsEntry;