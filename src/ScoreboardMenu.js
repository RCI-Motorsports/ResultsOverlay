import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import TrackMapping from './track_name_mapping.json';
import SessionMapping from './session_mapping.json';
import CarMapping from './car_name_mapping.json';

class ScoreboardMenu extends Component {
    intervalID;
    fReader;
    content;
    constructor(props) {
        super(props);

        this.state = {dataLoaded: false, title: ''}
        this.fileInput = React.createRef();
        this.textInput = React.createRef();
        this.fReader = new FileReader();
    }

    chunkLeaderboardLines = (lines) => {
        let retArray = [];
        let i, j, chunk = 10;
        for (i = 0; i < lines.length; i += chunk) {
            let tmp = lines.slice(i, i + chunk);
            retArray.push(tmp);
        }
        return retArray;
    }

    msToTime = (ms) => {
        return new Date(ms).toISOString().slice(14, -1);
    }

    addPositionField = (lines) => {
        let retArray = [];

        return lines.map((line, idx) => {
            line['position'] = idx+1;
            line['carName'] = CarMapping[line.car.carModel];
            line.timing['timeDiff'] = idx===0 ? 0 : lines[idx].timing.bestLap - lines[0].timing.bestLap;
            line.timing['timeDiffFormatted'] = idx===0 ? '' : '+' + this.msToTime(line.timing.timeDiff);
            line.timing['bestLapFormatted'] = this.msToTime(line.timing.bestLap);
            
            return line;
        })
    }

    onFileRead = (e) => {
        const content = this.fReader.result;
        
        const resContent = JSON.parse(content);

        let resultObj = {
            'session': SessionMapping[resContent.sessionType],
            'track': TrackMapping[resContent.trackName]
        };
        
        const leaderBoardLinesWithPos = this.addPositionField(resContent.sessionResult.leaderBoardLines)
        const leaderboardChunks = this.chunkLeaderboardLines(leaderBoardLinesWithPos);
        resultObj['leaderboard'] = leaderboardChunks;

        this.content = resultObj;


        console.log(this.textInput);


        this.setState({dataLoaded: true});
    }

    onUpload = () => {
        this.fReader.onloadend = this.onFileRead;
        this.fReader.readAsText(this.fileInput.current.files[0], 'UTF-16LE');
    }

    handleChange = (event) => {    
        this.setState({title: event.target.value});  
    }

    render() {

        let component = 
        <div className='div-1'>
            <div><input type="text" placeholder='Title..' onChange={this.handleChange}/></div>
            <div><input type="file" ref={this.fileInput}/></div>
            <div><button type="button" onClick={this.onUpload}>load</button></div>
        </div>;
        if (this.state.dataLoaded) {
            // scoreboardScreen -> [scoreboardPage] -> scoreboard -> [scoreBoardEntry]
            component = <Scoreboard content={this.content} title={this.state.title}/>;
        }
        return (
            <div>
                {component}
            </div>
        );
    }
}

export default ScoreboardMenu;