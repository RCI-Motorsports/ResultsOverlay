import React, { Component } from 'react';
import Leaderboard from './Leaderboard';

class OptionsList extends Component {
    allOptions = ["Leaderboard", "From file"];

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.allOptions.map((option, idx) => {
                        return (<div key={idx} background='black' onClick={() => {
                            this.props.onClickedOption(option);
                        }}>
                            {option}
                        </div>)
                    })
                }
            </div>
        );
    }
}

export default OptionsList;