import React, { Component } from 'react';
import ChampionshipStandingsEntry from './ChampionshipStandingsEntry';
import OverlayPage from '../Shared/OverlayPage';
import { ParseChampionshipResultsCSV } from '../Shared/ResultsParser';



class ChampionshipStandingsMenu extends Component {
    fReader
    content
    paginationOrder
    constructor(props) {
        super(props);

        this.state = { dataLoaded: false };
        this.fileInput = React.createRef();
        this.fReader = new FileReader();

        this.state = {}
    }

    onFileRead = (e) => {
        const fileContent = this.fReader.result;
        this.content = ParseChampionshipResultsCSV(fileContent);

        this.setState({ dataLoaded: true });
    }

    onUpload = () => {
        this.fReader.onloadend = this.onFileRead;
        this.fReader.readAsText(this.fileInput.current.files[0], 'UTF-8');
    }

    handleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    render() {
        let component =
            <div className='MainMenu'>
                <div><input type="text" placeholder='Title..' onChange={this.handleChange} /></div>
                <div><input type="file" ref={this.fileInput} /></div>
                <div><button type="button" onClick={this.onUpload}>load</button></div>
            </div>;
        if (this.state.dataLoaded) {
            component = <OverlayPage content={this.content} title={this.state.title} entryClass={ChampionshipStandingsEntry} />
        }
        return component;
    }
};

export default ChampionshipStandingsMenu;