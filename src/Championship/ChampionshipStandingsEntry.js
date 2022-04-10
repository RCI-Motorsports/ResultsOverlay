import React, { Component } from 'react';

import PositionPRO from "../img/col1-PRO.png";
import PositionSILVER from "../img/col1-SILVER.png";
import PositionAM from "../img/col1-AM.png";
import PositionROOKIE from "../img/col1-ROOKIE.png";

import NumberPRO from "../img/col2-PRO.png";
import NumberSILVER from "../img/col2-SILVER.png";
import NumberAM from "../img/col2-AM.png";
import NumberROOKIE from "../img/col2-ROOKIE.png";

import FlagPRO from "../img/col3-PRO.png";
import FlagSILVER from "../img/col3-SILVER.png";
import FlagAM from "../img/col3-AM.png";
import FlagROOKIE from "../img/col3-ROOKIE.png";

import sweden from "../img/countries/Sweden.png";

import Countries from "../Countries";

class ChampionshipStandingsEntry extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var positionColImg  = undefined;
        var numberColImg    = undefined;
        var flagColImg      = undefined;

        if (this.props.entry.category === 3) {
            positionColImg = PositionPRO;
            numberColImg = NumberPRO;
            flagColImg = FlagPRO;
        } else if (this.props.entry.category === 2) {
            positionColImg = PositionSILVER;
            numberColImg = NumberSILVER;
            flagColImg = FlagSILVER;
        } else if (this.props.entry.category === 1) {
            positionColImg = PositionAM;
            numberColImg = NumberAM;
            flagColImg = FlagAM;
        } else {
            positionColImg = PositionROOKIE;
            numberColImg = NumberROOKIE;
            flagColImg = FlagROOKIE;
        }

        return (
            <div className={`Row`}>
                <div className='ChampionshipStandingsPositionCol' style={{ backgroundImage: `url(${positionColImg})`}}>{ this.props.entry.position }</div>
                <div className={`ChampionshipStandingsCarNumCol ${this.props.entry.categoryName}`} style={{ backgroundImage: `url(${numberColImg})`}}>{ this.props.entry.carNumber }</div>
                <div className='ChampionshipStandingsFlagCol' style={{ backgroundImage: `url(${flagColImg}), url(${Countries[this.props.entry.country]})` }}></div>
                <div className='ChampionshipStandingsNameCol'><span>{ this.props.entry.name }</span></div>
                <div className='ChampionshipStandingsCarCol'>{ this.props.entry.car }</div>
                <div className='ChampionshipStandingsPointsCol'>{ this.props.entry.championshipStandings.points }</div>
            </div>
        );
    }
}

export default ChampionshipStandingsEntry;
