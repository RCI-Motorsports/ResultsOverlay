import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import OptionsList from './OptionsList';
import SessionResultsMenu from './SessionResults/SessionResultsMenu';
import ChampionshipStandingsMenu from './Championship/ChampionshipStandingsMenu';

const OPTIONS = {
    RESULT_JSON: 'result_json',
    CHAMP_STANDINGS_JSON: 'champ_standings_json'
};

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {activePage: ""}
    };

    onClickedOption = (clicked) => {
        this.setState({activePage: clicked.target.id});
    }

    render() {
        let component = <OptionsList onClickedOption={this.onClickedOption}/>;
        if (this.state.activePage === OPTIONS.RESULT_JSON) {
            component = <SessionResultsMenu />
        } else if (this.state.activePage === OPTIONS.CHAMP_STANDINGS_JSON) {
            component = <ChampionshipStandingsMenu />
        } else {
            component = <div className='MainMenu' id='MainMenu'>
                            <Button type='button' id={OPTIONS.CHAMP_STANDINGS_JSON} onClick={this.onClickedOption}>Championship standings .csv</Button>
                        </div>;
        }

        return component;
    }
}

export default Menu;