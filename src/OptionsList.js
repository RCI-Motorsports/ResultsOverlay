import React, { Component } from 'react';
import Leaderboard from './Leaderboard';
import Button from 'react-bootstrap/Button';

class OptionsList extends Component {
    allOptions = [/*"Leaderboard", */"From results .json"];

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='MainMenu'>
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