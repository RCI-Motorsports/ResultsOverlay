import React, { Component } from 'react';
import CSVToArray from '../util';
import ChampionshipStandingsPage from './ChampionshipStandingsPage';

const COLUMN_MAPPING = {
    position: 0,
    class: 1,
    category: 2,
    car_num: 3,
    name: 4,
    car: 5,
    points: 6,
};

class ChampionshipStandingsMenu extends Component {
    fReader
    content
    paginationOrder
    constructor(props) {
        super(props);

        this.state = { dataLoaded: false };
        this.fileInput = React.createRef();
        this.fReader = new FileReader();
        this.paginationOrder = [
            'GT3-PRO',
            'GT3-SILVER',
            'GT3-AM',
            'GT3-ROOKIE',
            'GT4-PRO',
            'GT4-SILVER',
            'GT4-AM',
            'GT4-ROOKIE'
        ];

        this.state = {}
    }

    onFileRead = (e) => {
        const content = this.fReader.result;

        let csvArray = CSVToArray(content, ',');
        csvArray.shift();
        csvArray = csvArray.filter(entry=> {
            return entry[COLUMN_MAPPING.name] !== '';
        }).map((entry, idx) => {
            return {
                carNumber: entry[COLUMN_MAPPING.car_num],
                class: entry[COLUMN_MAPPING.class],
                name: entry[COLUMN_MAPPING.name],
                car: entry[COLUMN_MAPPING.car],
                points: entry[COLUMN_MAPPING.points],
                id: idx,
                category: entry[COLUMN_MAPPING.category].toUpperCase()
            }
        })

        this.content = this.paginateStandings(csvArray, 10);

        this.setState({ dataLoaded: true });
    }

    paginateStandings = (lines, linesPerPage) => {
        const categorizedLines = lines.reduce((result, value) => {
            const key = `${value.class}-${value.category}`;
            if (!result[key]) {
                result[key] = [];
            }
            result[key].push(value);
            return result;
        }, {});


        const namedPages = Object.keys(categorizedLines).map(key => {
            let category = categorizedLines[key];
            const pages = [];
            
            category = category.sort((a, b) => {
                const aPoints = parseInt(a.points, 10);
                const bPoints = parseInt(b.points, 10);
                if (aPoints > bPoints) {
                    return -1;
                }
                if (aPoints < bPoints) {
                    return 1;
                }
                return 0;
            }).map((entry, idx) => {
                return {
                    ...entry,
                    position: `${idx+1}`
                }
            });

            let i;
            for (i = 0; i < category.length; i += linesPerPage) {
                pages.push(category.slice(i, i + linesPerPage));
            }

            return {
                name: key,
                lines: pages
            };
        }).sort((a, b) => {
            const aIndex = this.paginationOrder.indexOf(a.name);
            const bIndex = this.paginationOrder.indexOf(b.name);
            if (aIndex < bIndex) {
                return -1;
            }
            if (aIndex > bIndex) {
                return 1;
            }  
            return 0;
        });

        return namedPages;
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
            component = <ChampionshipStandingsPage content={this.content} title={this.state.title} />
        }
        return component;
    }
};

export default ChampionshipStandingsMenu;