import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Leaderboard from './Leaderboard';
import OptionsList from './OptionsList';
import SessionResultsMenu from './SessionResultsPage/SessionResultsMenu';

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
        if (this.state.activePage === "Leaderboard") {
            component = <Leaderboard />;
        } else if (this.state.activePage === OPTIONS.RESULT_JSON) {
            component = <SessionResultsMenu />
        } else {
            component = <div className='MainMenu' id='MainMenu'>
                            <Button type='button' id={OPTIONS.RESULT_JSON} onClick={this.onClickedOption}>Results .json</Button>
                            <Button type='button' id={OPTIONS.CHAMP_STANDINGS_JSON} onClick={this.onClickedOption}>Championship standings json</Button>
                        </div>;
        }

        return component;
    }
}

export default Menu;