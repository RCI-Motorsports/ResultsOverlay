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

    fetchStandings = () => {
        // fetch standings from API
        // sort results (ResultsParser.js)
        // 

        var requestOptions = {
            method: 'GET',
            Vary: 'Origin',
        };

        fetch(`https://racerci.com/api/championships/standings/standings?splitId=${this.state.title}`, requestOptions)
        .then((res) => {
            console.log(`res.json(): ${res.json()}`);
            const jsonRes = JSON.parse(res);
            this.content = ParseAPIResponse(jsonRes);
            this.state.title = jsonRes.championshipName;
            this.setState({ dataLoaded: true });
        });
    }

    handleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    render() {
        let component =
            <div className='MainMenu'>
                <div><input type="text" placeholder='Title..' onChange={this.handleChange} style={{width: '500px'}}/></div>
                <div><input type="file" ref={this.fileInput} /></div>
                <div><button type="button" onClick={this.onUpload}>load</button></div>
            </div>;

        if (this.readFromAPI) {
            component = 
                <div className='MainMenu'>
                    <div><input type="text" placeholder='Split ID' onChange={this.handleChange} style={{width: '80px'}}/> </div>
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