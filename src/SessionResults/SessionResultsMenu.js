import React, { Component } from 'react';
//import SessionResultsPage from './SessionResultsPage';
import OverlayPage from '../Shared/OverlayPage';
import TrackMapping from '../track_name_mapping.json';
import SessionMapping from '../session_mapping.json';
import CarMapping from '../car_name_mapping.json';
import SessionResultEntry from './SessionResultEntry';
import { ParseSessionResultJSON } from '../Shared/ResultsParser';

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

    onFileRead = (e) => {
        const content = this.fReader.result;
        this.content = ParseSessionResultJSON(JSON.parse(content));

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
                            <OverlayPage content={this.content} title={this.state.title} entryClass={SessionResultEntry} />
                        </div>;
        }
        return component;
    }
}

export default SessionResultsMenu;