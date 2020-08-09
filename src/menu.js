import React, { Component } from 'react';
import Leaderboard from './Leaderboard';
import OptionsList from './OptionsList';
import ScoreboardPage from './ScoreboardPage';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {activePage: ""}
    };

    onClickedOption = (clicked) => {
        this.setState({activePage: clicked});
    }

    render() {
        let component = <OptionsList onClickedOption={this.onClickedOption}/>;
        if (this.state.activePage === "Leaderboard") {
            component = <Leaderboard />;
        } else if (this.state.activePage === "From file") {
            component = <ScoreboardPage />
        }

        return (
            <div>
                {component}
            </div>
        );
    }
}

export default Menu;