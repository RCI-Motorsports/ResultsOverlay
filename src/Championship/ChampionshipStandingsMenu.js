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

        fetch("https://racerci.com/api/championships/standings/standings?splitId=309", requestOptions)
        .then((res) => {
            const jsonRes = JSON.parse('res');
            this.content = ParseAPIResponse(jsonRes);
            this.state.title = standingsJson.championshipName;
            this.setState({ dataLoaded: true });
        });

        const standingsJson = JSON.parse(`{
            "championshipName": "Friday 2022 Winter Championship",
            "standings": {
              "3": [
                {
                  "id": 126,
                  "position": 1,
                  "driverCategory": 3,
                  "points": 72,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 1,
                  "polePositionCount": 1,
                  "winCount": 1,
                  "podiumCount": 1,
                  "signedOut": false,
                  "driverName": "George Boothby",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 800,
                  "nationality": "gb",
                  "car": {
                    "cup": 1,
                    "brand": 15,
                    "value": 22,
                    "label": "McLaren 720S GT3 (2019)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 135,
                  "position": 2,
                  "driverCategory": 3,
                  "points": 58,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 1,
                  "signedOut": false,
                  "driverName": "Grantas Kareckas",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 119,
                  "nationality": "lt",
                  "car": {
                    "cup": 1,
                    "brand": 15,
                    "value": 22,
                    "label": "McLaren 720S GT3 (2019)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 105,
                  "position": 3,
                  "driverCategory": 3,
                  "points": 53,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 1,
                  "signedOut": false,
                  "driverName": "Mathys Leitao",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 27,
                  "nationality": "fr",
                  "car": {
                    "cup": 1,
                    "brand": 5,
                    "value": 30,
                    "label": "BMW M4 GT3 2022",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 140,
                  "position": 4,
                  "driverCategory": 3,
                  "points": 48,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Samir Foch",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 488,
                  "nationality": "lv",
                  "car": {
                    "cup": 1,
                    "brand": 7,
                    "value": 24,
                    "label": "Ferrari 488 GT3 Evo (2020)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 107,
                  "position": 5,
                  "driverCategory": 3,
                  "points": 44,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Giuseppe D Anna",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 11,
                  "nationality": "it",
                  "car": {
                    "cup": 1,
                    "brand": 15,
                    "value": 22,
                    "label": "McLaren 720S GT3 (2019)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 131,
                  "position": 6,
                  "driverCategory": 3,
                  "points": 40,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Tinko van der Velde",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 66,
                  "nationality": "nl",
                  "car": {
                    "cup": 1,
                    "brand": 16,
                    "value": 25,
                    "label": "Mercedes AMG GT3 Evo (2020)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 129,
                  "position": 7,
                  "driverCategory": 3,
                  "points": 37,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Martin Grady",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 18,
                  "nationality": "gb",
                  "car": {
                    "cup": 1,
                    "brand": 15,
                    "value": 22,
                    "label": "McLaren 720S GT3 (2019)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 122,
                  "position": 8,
                  "driverCategory": 3,
                  "points": 34,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Jaroslav Honzik",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 39,
                  "nationality": "cz",
                  "car": {
                    "cup": 1,
                    "brand": 5,
                    "value": 30,
                    "label": "BMW M4 GT3 2022",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 116,
                  "position": 9,
                  "driverCategory": 3,
                  "points": 31,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Valentin Barrier",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 72,
                  "nationality": "fr",
                  "car": {
                    "cup": 1,
                    "brand": 18,
                    "value": 23,
                    "label": "Porsche 911 II GT3 R (2019)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 133,
                  "position": 10,
                  "driverCategory": 3,
                  "points": 28,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Simon Keeble",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 147,
                  "nationality": "gb",
                  "car": {
                    "cup": 1,
                    "brand": 1,
                    "value": 20,
                    "label": "AMR V8 Vantage (2019)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 128,
                  "position": 11,
                  "driverCategory": 3,
                  "points": 25,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Alessandro Zampieri",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 909,
                  "nationality": "it",
                  "car": {
                    "cup": 1,
                    "brand": 5,
                    "value": 30,
                    "label": "BMW M4 GT3 2022",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 117,
                  "position": 12,
                  "driverCategory": 3,
                  "points": 23,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Max Wojtyna",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 16,
                  "nationality": "pl",
                  "car": {
                    "cup": 1,
                    "brand": 18,
                    "value": 23,
                    "label": "Porsche 911 II GT3 R (2019)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 130,
                  "position": 13,
                  "driverCategory": 3,
                  "points": 21,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Chris Severt",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 83,
                  "nationality": "us",
                  "car": {
                    "cup": 1,
                    "brand": 9,
                    "value": 21,
                    "label": "Honda NSX Evo (2019)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 113,
                  "position": 14,
                  "driverCategory": 3,
                  "points": 19,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Przemek Ostrouch",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 444,
                  "nationality": "pl",
                  "car": {
                    "cup": 1,
                    "brand": 15,
                    "value": 22,
                    "label": "McLaren 720S GT3 (2019)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 125,
                  "position": 15,
                  "driverCategory": 3,
                  "points": 17,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Christophe Verstrepen",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 747,
                  "nationality": "be",
                  "car": {
                    "cup": 1,
                    "brand": 4,
                    "value": 8,
                    "label": "Bentley Continental GT3 (2018)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 114,
                  "position": 16,
                  "driverCategory": 3,
                  "points": 15,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Carlo  Scarmato",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 92,
                  "nationality": "it",
                  "car": {
                    "cup": 1,
                    "brand": 5,
                    "value": 30,
                    "label": "BMW M4 GT3 2022",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 120,
                  "position": 17,
                  "driverCategory": 3,
                  "points": 14,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Matteo Cinotti",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 51,
                  "nationality": "it",
                  "car": {
                    "cup": 1,
                    "brand": 3,
                    "value": 19,
                    "label": "Audi R8 LMS Evo (2019)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 123,
                  "position": 18,
                  "driverCategory": 3,
                  "points": 13,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Joona Savolainen",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 100,
                  "nationality": "fi",
                  "car": {
                    "cup": 1,
                    "brand": 16,
                    "value": 25,
                    "label": "Mercedes AMG GT3 Evo (2020)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 119,
                  "position": 19,
                  "driverCategory": 3,
                  "points": 12,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Daniele Giacomelli",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 6,
                  "nationality": "it",
                  "car": {
                    "cup": 1,
                    "brand": 1,
                    "value": 20,
                    "label": "AMR V8 Vantage (2019)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 121,
                  "position": 20,
                  "driverCategory": 3,
                  "points": 11,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Max Payne",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 966,
                  "nationality": "mc",
                  "car": {
                    "cup": 1,
                    "brand": 17,
                    "value": 6,
                    "label": "Nissan GT-R Nismo GT3 (2018)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 110,
                  "position": 21,
                  "driverCategory": 3,
                  "points": 10,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Christopher Wolfgruber",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 41,
                  "nationality": "at",
                  "car": {
                    "cup": 1,
                    "brand": 15,
                    "value": 22,
                    "label": "McLaren 720S GT3 (2019)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 109,
                  "position": 22,
                  "driverCategory": 3,
                  "points": 9,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Jack alexander",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 155,
                  "nationality": "gb",
                  "car": {
                    "cup": 1,
                    "brand": 5,
                    "value": 30,
                    "label": "BMW M4 GT3 2022",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 108,
                  "position": 23,
                  "driverCategory": 3,
                  "points": 8,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Milton Steele-Vaessen",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 96,
                  "nationality": "gb",
                  "car": {
                    "cup": 1,
                    "brand": 1,
                    "value": 20,
                    "label": "AMR V8 Vantage (2019)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 111,
                  "position": 24,
                  "driverCategory": 3,
                  "points": 7,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Oscar Hoole",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 58,
                  "nationality": "gb",
                  "car": {
                    "cup": 1,
                    "brand": 15,
                    "value": 22,
                    "label": "McLaren 720S GT3 (2019)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 112,
                  "position": 25,
                  "driverCategory": 3,
                  "points": 6,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Adam Dubiel",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 840,
                  "nationality": "pl",
                  "car": {
                    "cup": 1,
                    "brand": 7,
                    "value": 24,
                    "label": "Ferrari 488 GT3 Evo (2020)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 106,
                  "position": 26,
                  "driverCategory": 3,
                  "points": 5,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Mateusz Ksiazek",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 427,
                  "nationality": "pl",
                  "car": {
                    "cup": 1,
                    "brand": 7,
                    "value": 24,
                    "label": "Ferrari 488 GT3 Evo (2020)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 127,
                  "position": 27,
                  "driverCategory": 3,
                  "points": 4,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Amedeo Dekeyser",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 814,
                  "nationality": "be",
                  "car": {
                    "cup": 1,
                    "brand": 16,
                    "value": 25,
                    "label": "Mercedes AMG GT3 Evo (2020)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 138,
                  "position": 28,
                  "driverCategory": 3,
                  "points": 3,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Lukasz Sidor",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 199,
                  "nationality": "pl",
                  "car": {
                    "cup": 1,
                    "brand": 5,
                    "value": 30,
                    "label": "BMW M4 GT3 2022",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 139,
                  "position": 29,
                  "driverCategory": 3,
                  "points": 2,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Ruben Conceicao",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 229,
                  "nationality": "pt",
                  "car": {
                    "cup": 1,
                    "brand": 5,
                    "value": 30,
                    "label": "BMW M4 GT3 2022",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 124,
                  "position": 30,
                  "driverCategory": 3,
                  "points": 1,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Daniel  Valle",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 85,
                  "nationality": "es",
                  "car": {
                    "cup": 1,
                    "brand": 5,
                    "value": 30,
                    "label": "BMW M4 GT3 2022",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 115,
                  "position": 31,
                  "driverCategory": 3,
                  "points": 0,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Arthur Levchenko",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 211,
                  "nationality": "ua",
                  "car": {
                    "cup": 1,
                    "brand": 5,
                    "value": 30,
                    "label": "BMW M4 GT3 2022",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 118,
                  "position": 32,
                  "driverCategory": 3,
                  "points": 0,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Jason kellaway",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 12,
                  "nationality": "gb",
                  "car": {
                    "cup": 1,
                    "brand": 5,
                    "value": 30,
                    "label": "BMW M4 GT3 2022",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 132,
                  "position": 33,
                  "driverCategory": 3,
                  "points": 0,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 1,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Julian Vanbrugh",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 19,
                  "nationality": "gb",
                  "car": {
                    "cup": 1,
                    "brand": 4,
                    "value": 8,
                    "label": "Bentley Continental GT3 (2018)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 134,
                  "position": 34,
                  "driverCategory": 3,
                  "points": 0,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "William Stephenson",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 108,
                  "nationality": "gb-eng",
                  "car": {
                    "cup": 1,
                    "brand": 5,
                    "value": 30,
                    "label": "BMW M4 GT3 2022",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 136,
                  "position": 35,
                  "driverCategory": 3,
                  "points": 0,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Miguel Neto",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 43,
                  "nationality": "pt",
                  "car": {
                    "cup": 1,
                    "brand": 5,
                    "value": 30,
                    "label": "BMW M4 GT3 2022",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 137,
                  "position": 36,
                  "driverCategory": 3,
                  "points": 0,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 1,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Jan Klimes",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 329,
                  "nationality": "cz",
                  "car": {
                    "cup": 1,
                    "brand": 18,
                    "value": 23,
                    "label": "Porsche 911 II GT3 R (2019)",
                    "children": null,
                    "parentId": null
                  }
                },
                {
                  "id": 141,
                  "position": 37,
                  "driverCategory": 3,
                  "points": 0,
                  "disqualifiedCount": 0,
                  "signedOutCount": 0,
                  "noShowCount": 0,
                  "licensePoints": 0,
                  "fastestLapCount": 0,
                  "polePositionCount": 0,
                  "winCount": 0,
                  "podiumCount": 0,
                  "signedOut": false,
                  "driverName": "Maciej Malinowski",
                  "signupDriverCategory": 3,
                  "teamName": null,
                  "raceNumber": 993,
                  "nationality": "pl",
                  "car": {
                    "cup": 1,
                    "brand": 16,
                    "value": 25,
                    "label": "Mercedes AMG GT3 Evo (2020)",
                    "children": null,
                    "parentId": null
                  }
                }
              ]
            }
          }`)

        
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