import React, { Component } from 'react';
import ScoreboardEntryList from './ScoreboardEntryList';
import { ENTRY_VISUAL_STATE } from './enums';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ScoreBoardEntry from './ScoreBoardEntry';

class Scoreboard extends Component {
    currentPage
    constructor(props) {
        super(props);

        this.currentPage = 0;

        this.state = {
            pageEntries: this.props.content.leaderboard[0],
            visState: ENTRY_VISUAL_STATE.DRIVER
        }
    }

    _handleKeyDown = (event) => {
        if (event.keyCode === 81) {
            let newPage = this.currentPage + 1;
            if (newPage === this.props.content.leaderboard.length) {
                newPage = 0;
            }

            this._updateEntries(newPage);
        } else if (event.keyCode === 87) {
            if (this.state.visState === ENTRY_VISUAL_STATE.TEAM) {
                this.setState({ visState: ENTRY_VISUAL_STATE.DRIVER });
            } else if (this.state.visState === ENTRY_VISUAL_STATE.DRIVER) {
                this.setState({ visState: ENTRY_VISUAL_STATE.TEAM });
            }
        }
    }

    _updateEntries = async (newPage) => {
        // clear current entries
        await this._clearEntries();
        this.currentPage = newPage;
        await this._addEntries();
    }

    _clearEntries = async () => {
        const p = new Promise(resolve => {
            this._removeEntry(() => {
                resolve();
            });
        });
        return p;
    }

    _removeEntry = (onCleared) => {
        let entries = [...this.state.pageEntries];
        entries.pop();
        this.setState({ pageEntries: entries });
        if (entries.length > 0) {
            setTimeout(() => { this._removeEntry(onCleared) }, 100);
        } else {
            setTimeout(() => { onCleared() }, 100);
        }
    }

    
    _addEntries = async () => {
        const newEntries = [...this.props.content.leaderboard[this.currentPage]];
        for(const entry of newEntries) {
            await this._addEntry(entry);
        }
    }

    _addEntry = async (newEntry) => {
        const p = new Promise(resolve => {
            const newEntries = [...this.state.pageEntries];
            newEntries.push(newEntry);
            this.setState({ pageEntries: newEntries});
            setTimeout(() => { resolve() }, 100);
        });

        return p;
    }

    componentDidMount() {
        document.addEventListener("keydown", this._handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this._handleKeyDown);
    }

    render() {
        const entries = this.state.pageEntries;
        const visState = this.state.visState;

        return (
            <div className='Scoreboard'>
                <div className='Title'>{this.props.title + " - " + this.props.content.track}</div>
                <div className='Subtitle'>{this.props.content.session}</div>
                <div />
                <TransitionGroup>
                    {entries.map((entry, idx) => {
                        return (
                            <CSSTransition
                                key={`${entry.car.carId}-transition`}
                                classNames="item"
                                timeout={500}
                            >
                                <ScoreBoardEntry key={entry.car.carId} entry={entry} visualstate={visState} style={idx % 2 === 0 ? 'div-entry-1' : 'div-entry-2'} />
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>

            </div>
        );
    }
}

export default Scoreboard;