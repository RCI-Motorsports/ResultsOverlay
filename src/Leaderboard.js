import React, { Component } from 'react';
const { GoogleSpreadsheet } = require('google-spreadsheet');

const COLS = {
    position: 0,
    cupPosition: 1,
    teamName: 2,
    driverName: 3,
    laps: 4,
    gap: 5
};

class Leaderboard extends Component {
    intervalID;

    constructor(props) {
        super(props);
        this.state = {entries: []}
    }

    componentDidMount() {
        this.getData();
    }

    componentWillUnmount() {
        /*
          stop getData() from continuing to run even
          after unmounting this component. Notice we are calling
          'clearTimeout()` here rather than `clearInterval()` as
          in the previous example.
        */
        //clearTimeout(this.intervalID);
    }

    getData = () => {
        const doc = new GoogleSpreadsheet('10rzTjo2N0e8Jv3u_5MITR15rPKyNP_PZhQZT8Y9BuI8');
        doc.useApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

        doc.loadInfo()
            .then(() => {
                doc.sheetsByIndex[1].loadCells('A1:F100')
                .then(() => {
                    let shouldContinue = true;
                    let row = 0;
                    let rows = [];
                    while(shouldContinue) {
                        const position = doc.sheetsByIndex[1].getCell(row, COLS.position).value;
                        const cupPosition = doc.sheetsByIndex[1].getCell(row, COLS.cupPosition).value;
                        const teamName = doc.sheetsByIndex[1].getCell(row, COLS.teamName).value;
                        const driverName = doc.sheetsByIndex[1].getCell(row, COLS.driverName).value;
                        const laps = doc.sheetsByIndex[1].getCell(row, COLS.laps).value;
                        const gap = doc.sheetsByIndex[1].getCell(row, COLS.gap).value;

                        if (!position) {
                            shouldContinue = false;
                        } else {
                            rows.push({
                                position,
                                cupPosition,
                                teamName,
                                driverName,
                                laps,
                                gap
                            });

                            row += 1;
                        }
                    }
                    this.setState({entries: rows});
                    this.intervalID = setTimeout(this.getData.bind(this), 1500);
                })
               
            })
      }

    render() {
        return (
            <div>
                {this.state.entries.map((entry, idx) => {
                    return (<div class={`div-${idx%2}`} align='left' background='green' key={entry.position}>
                        {entry.position}. {entry.teamName} - {entry.driverName}
                    </div>)
                })}
            </div>
        );
    }
}

export default Leaderboard;