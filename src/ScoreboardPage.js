import React, { Component } from 'react';
import Scoreboard from './Scoreboard';

class ScoreboardPage extends Component {
    intervalID;
    fReader;
    content;
    constructor(props) {
        super(props);

        this.state = {dataLoaded: false}
        this.fileInput = React.createRef();
        this.fReader = new FileReader();
    }

    onFileRead = (e) => {
        const content = this.fReader.result;
        
        this.content = JSON.parse(content);
        this.setState({dataLoaded: true});
    }

    onUpload = () => {
        this.fReader.onloadend = this.onFileRead;
        this.fReader.readAsText(this.fileInput.current.files[0], 'UTF-16LE');
    }

    render() {
        let component = <div><input type="file" ref={this.fileInput}/><button type="button" onClick={this.onUpload}>load</button></div>;
        if (this.state.dataLoaded) {
            component = <Scoreboard props={this.content} />;
        }
        return (
            <div>
                {component}
            </div>
        );
    }
}

export default ScoreboardPage;