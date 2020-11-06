import React, { Component } from 'react';
import { ENTRY_VISUAL_STATE } from '../enums';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Title } from './Title';

class OverlayPage extends Component {

    currentPage
    currentCategoryIndex
    currentTitle;
    NEXT_PAGE_KEY

    constructor(props) {
        super(props);

        this.currentPage = -1;
        this.currentCategoryIndex = 0;
        this.currentTitle = this.props.title;
        this.NEXT_PAGE_KEY = 'Q'.charCodeAt(0);
        this.TEAM_DRIVER_SWAP_KEY = 'W'.charCodeAt(0);

        this.state = {
            pageEntries: [],
            visState: ENTRY_VISUAL_STATE.DRIVER,
            staticTitle: this.props.content[this.currentCategoryIndex].name
        }
    }

    _handleKeyDown = async (event) => {
        if (event.keyCode === this.NEXT_PAGE_KEY) {
            let newPage = this.currentPage + 1;
            let newCategoryIndex = this.currentCategoryIndex;
            if (newPage === this.props.content[this.currentCategoryIndex].lines.length) {
                newPage = 0;
                newCategoryIndex += 1;

                if (newCategoryIndex === this.props.content.length) {
                    newCategoryIndex = 0;
                    newPage = -1;
                }

                if (this.props.content[newCategoryIndex]) {
                    await this._updateTitle(this.props.content[newCategoryIndex].name);
                }
            }

            this._updateEntries(newPage, newCategoryIndex);
        }
        // } else if (event.keyCode === this.TEAM_DRIVER_SWAP_KEY) {
        //     if (this.state.visState === ENTRY_VISUAL_STATE.TEAM) {
        //         this.setState({ visState: ENTRY_VISUAL_STATE.DRIVER });
        //     } else if (this.state.visState === ENTRY_VISUAL_STATE.DRIVER) {
        //         this.setState({ visState: ENTRY_VISUAL_STATE.TEAM });
        //     }
        // }
    }

    _updateTitle = async (newTitle) => {
        const p = new Promise(resolve => {
            this.setState({ staticTitle: '' });
            setTimeout(() => {
                this.setState({ staticTitle: newTitle });
                setTimeout(() => {
                    resolve();
                }, 200);
            }, 500);
        });

        return p;
    }

    _updateEntries = async (newPage, newCategoryIndex) => {
        // clear current entries
        await this._clearEntries();
        this.currentPage = newPage;
        this.currentCategoryIndex = newCategoryIndex;
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
        const categoryName = this.props.content[this.currentCategoryIndex].name;
        this.currentTitle = `${this.props.title} - ${categoryName ? categoryName : ''}`;
        if (this.props.content[this.currentCategoryIndex].lines[this.currentPage]) {
            const newEntries = [...this.props.content[this.currentCategoryIndex].lines[this.currentPage]];
            for (const entry of newEntries) {
                await this._addEntry(entry);
            }
        }
    }

    _addEntry = async (newEntry) => {
        const p = new Promise(resolve => {
            const newEntries = [...this.state.pageEntries];
            newEntries.push(newEntry);
            this.setState({ pageEntries: newEntries });
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

    title() {
        if (this.state.staticTitle !== '') {
            return <Title staticTitle={this.state.staticTitle} title={this.props.title} />;
        }

        return <div></div>;
    }

    render() {
        const entries = this.state.pageEntries;
        return (
            <div className='OverlayPage'>
                <div className='test'>
                    <TransitionGroup>
                        <CSSTransition
                            key={`${this.state.staticTitle}-transition`}
                            classNames="item"
                            timeout={500}
                        >
                            {this.title()}
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <TransitionGroup>
                    {entries.map((entry) => {
                        return (
                            <CSSTransition
                                key={`${entry.id}-transition`}
                                classNames="item"
                                timeout={2200}
                            >
                                <this.props.entryClass key={`${entry.id}-entry`} entry={entry} />
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>

            </div>
        );
    }
};

export default OverlayPage;