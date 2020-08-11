import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import TrackMapping from './track_name_mapping.json';
import SessionMapping from './session_mapping.json';

class ScoreboardMenu extends Component {
    intervalID;
    fReader;
    content;
    constructor(props) {
        super(props);

        this.state = {dataLoaded: false}
        this.fileInput = React.createRef();
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

    onFileRead = (e) => {
        const content = this.fReader.result;
        
        const resContent = JSON.parse(content);

        let resultObj = {
            'session': SessionMapping[resContent.sessionType],
            'track': TrackMapping[resContent.trackName]
        };

        const leaderboardChunks = this.chunkLeaderboardLines(resContent.sessionResult.leaderBoardLines);
        resultObj['leaderboard'] = leaderboardChunks;

        this.content = resultObj;
        this.setState({dataLoaded: true});
    }

    onUpload = () => {
        this.fReader.onloadend = this.onFileRead;
        this.fReader.readAsText(this.fileInput.current.files[0], 'UTF-16LE');
    }

    render() {
        let component = <div><input type="file" ref={this.fileInput}/><button type="button" onClick={this.onUpload}>load</button></div>;
        if (this.state.dataLoaded) {
            // scoreboardScreen -> [scoreboardPage] -> scoreboard -> [scoreBoardEntry]
            component = <Scoreboard props={this.content} />;
        }
        return (
            <div>
                {component}
            </div>
        );
    }
}

export default ScoreboardMenu;