import React, { Component } from 'react';
import { ENTRY_VISUAL_STATE } from '../enums';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import SessionResultEntry from './SessionResultEntry';

class SessionResultsPage extends Component {
    currentPage
    NEXT_PAGE_KEY
    TEAM_DRIVER_SWAP_KEY
    constructor(props) {
        super(props);

        this.currentPage = -1;
        this.NEXT_PAGE_KEY = 'Q'.charCodeAt(0);
        this.TEAM_DRIVER_SWAP_KEY = 'W'.charCodeAt(0);

        this.state = {
            pageEntries: [],
            visState: ENTRY_VISUAL_STATE.DRIVER
        }
    }

    _handleKeyDown = (event) => {
        if (event.keyCode === this.NEXT_PAGE_KEY) {
            let newPage = this.currentPage + 1;
            if (newPage === this.props.content.leaderboard.length) {
                newPage = 0;
            }

            this._updateEntries(newPage);
        } else if (event.keyCode === this.TEAM_DRIVER_SWAP_KEY) {
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
        entries.shift();
        this.setState({ pageEntries: entries });
        if (entries.length > 0) {
            setTimeout(() => { this._removeEntry(onCleared) }, 100);
        } else {
            setTimeout(() => { onCleared() }, 600);
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
            <div className='SessionResultsPage'>
                <div className='Title'>{`${this.props.title} - ${this.props.content.track} - ${this.props.content.session}`}</div>
                <TransitionGroup>
                    {entries.map((entry, idx) => {
                        return (
                            <CSSTransition
                                key={`${entry.car.carId}-transition`}
                                classNames="item"
                                timeout={2200}
                            >
                                <SessionResultEntry key={entry.car.carId} entry={entry} visualstate={visState} style={idx % 2 === 0 ? 'div-entry-1' : 'div-entry-2'} />
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>

            </div>
        );
    }
}

export default SessionResultsPage;