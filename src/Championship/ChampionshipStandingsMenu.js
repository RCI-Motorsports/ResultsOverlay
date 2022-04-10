import React, { Component } from 'react';
import ChampionshipStandingsEntry from './ChampionshipStandingsEntry';
import OverlayPage from '../Shared/OverlayPage';
import { ParseAPIResponse, ParseChampionshipResultsCSV } from '../Shared/ResultsParser';



class ChampionshipStandingsMenu extends Component {
    fReader
    content
    paginationOrder
    readFromAPI
    constructor(props) {
        super(props);

        this.readFromAPI = props.readFromAPI

        this.fileInput = React.createRef();
        this.fReader = new FileReader();

        this.state = { displayMode: "1" }
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

    fetchStandings = async () => {
        // fetch standings from API
        // sort results (ResultsParser.js)
        // 

        var requestOptions = {
            method: 'GET',
            Vary: 'Origin',
        };

        const response = await (await fetch(`https://racerci.com/api/championships/standings/broadcast?splitId=${this.state.splitId}&mode=${this.state.displayMode}`, requestOptions)).json();
        this.content = ParseAPIResponse(response);
        this.state.title = response.championshipName;
        this.setState({ dataLoaded: true });
    }

    updateSplitId = (event) => {
        this.setState({ splitId: event.target.value });
    }

    updateDisplayMode = (event) => {
        this.setState({ displayMode: event.target.value })
    }

    render() {
        let component =
            <div className='MainMenu'>
                <div><input type="text" placeholder='Title..' onChange={this.updateSplitId} style={{width: '500px'}}/></div>
                <div><input type="file" ref={this.fileInput} /></div>
                <div><button type="button" onClick={this.onUpload}>load</button></div>
            </div>;

        if (this.readFromAPI) {
            component = 
                <div className='MainMenu'>
                    <div><input type="text" placeholder='Split ID' onChange={this.updateSplitId} style={{width: '80px'}}/> </div>
                    <select onChange={this.updateDisplayMode}>
                        <option value="1">Normal</option>
                        <option value="2">Overall (Category)</option>
                        <option value="3">Mixed (Cups)</option>
                    </select>
                    <div><button type="button" onClick={this.fetchStandings}>load</button></div>
                </div>            
        }

        if (this.state.dataLoaded) {
            component = <OverlayPage content={this.content} title={this.state.title} entryClass={ChampionshipStandingsEntry} />
        }
        return component;
    }
};

export default ChampionshipStandingsMenu;
