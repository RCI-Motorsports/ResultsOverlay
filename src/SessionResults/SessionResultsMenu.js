import React, { Component } from 'react';
import SessionResultsPage from './SessionResultsPage';
import TrackMapping from '../track_name_mapping.json';
import SessionMapping from '../session_mapping.json';
import CarMapping from '../car_name_mapping.json';

class SessionResultsMenu extends Component {
    intervalID;
    fReader;
    content;
    constructor(props) {
        super(props);

        this.state = {dataLoaded: false, title: ''};
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

    addPositionField = (lines, isRace) => {
        const firstPlaceLaps = lines[0].timing.lapCount;
        const firstPlaceTime = lines[0].timing.totalTime;
        const firstPlaceBestLap = lines[0].timing.bestLap;
        
        return lines.map((line, idx) => {
            line['position'] = idx + 1;
            line['carName'] = CarMapping[line.car.carModel];
            
            let timeDiffFormatted = '---';

            if (isRace) {
                if (line.timing.lapCount < firstPlaceLaps) {
                    const lapCountDiff = firstPlaceLaps - line.timing.lapCount;
                    timeDiffFormatted = `+${lapCountDiff} lap${lapCountDiff > 1 ? 's' : ''}`;
                }
                else {
                    line.timing['timeDiff'] = line.timing.totalTime - firstPlaceTime;
                    timeDiffFormatted = idx === 0 ? '' : '+' + this.msToTime(line.timing.timeDiff);
                }
            } else {
                line.timing['timeDiff'] = idx === 0 ? 0 : lines[idx].timing.bestLap - firstPlaceBestLap;
                timeDiffFormatted = idx === 0 ? '' : '+' + this.msToTime(line.timing.timeDiff);
            }

            line.timing['timeDiffFormatted'] = timeDiffFormatted;
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
        
        const leaderBoardLinesWithPos = this.addPositionField(
            resContent.sessionResult.leaderBoardLines, 
            resContent.sessionType === 'R'
        );
        const leaderboardChunks = this.chunkLeaderboardLines(leaderBoardLinesWithPos);
        resultObj['leaderboard'] = leaderboardChunks;

        this.content = resultObj;

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
        <div className='MainMenu'>
            <div><input type="text" placeholder='Title..' onChange={this.handleChange}/></div>
            <div><input type="file" ref={this.fileInput}/></div>
            <div><button type="button" onClick={this.onUpload}>load</button></div>
        </div>;
        if (this.state.dataLoaded) {
            component = <div className='SessionResultsPage'>
                            <SessionResultsPage content={this.content} title={this.state.title}/>
                        </div>;
        }
        return component;
    }
}

export default SessionResultsMenu;