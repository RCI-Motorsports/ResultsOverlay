import CarMapping from '../car_name_mapping.json';
import CSVToArray from '../util';
import Countries from "../Countries";

/**
 * All of these methods should return data in this format:
 * [
 *      {
 *          name: `${class}-${category}`
 *          lines: [{
 *                          id: "",
 *                          car: "",
 *                          carNumber: "",
 *                          category: "", // PRO, SILVER, AM or ROOKIE
 *                          class: "", // GT3, ST, CUP or GT4
 *                          name: "",
 *                          position: "",
 *                          championshipStandings: {
 *                              points: "",
 *                              deficit: "", 
 *                          }
 *                          timing: {
 *                              bestLap: "",
 *                              deficit: ""
 *                          }
 *           ]
 *      }
 * ]
 * 
 * The array should be sorted by:
 *  
 * 1. 'GT3-PRO',
 * 2. 'GT3-SILVER',
 * 3. 'GT3-AM',
 * 4. 'GT3-ROOKIE',
 * 5. 'GT4-PRO',
 * 6. 'GT4-SILVER',
 * 7. 'GT4-AM',
 * 8. 'GT4-ROOKIE'
 * 
 */

const LINES_PER_PAGE = 10;

const PAGINATION_ORDER = [
    'GT3-PRO',
    'GT3-SILVER',
    'GT3-AM',
    'GT3-ROOKIE',
    'ST-PRO',
    'ST-SILVER',
    'ST-AM',
    'ST-ROOKIE',
    'CUP-PRO',
    'CUP-SILVER',
    'CUP-AM',
    'CUP-ROOKIE',
    'GT4-PRO',
    'GT4-SILVER',
    'GT4-AM',
    'GT4-ROOKIE'
];

const _getClass = (carModel) => {
    if (parseInt(carModel, 10) === 18) {
        return 'ST';
    }
    if (parseInt(carModel, 10) === 9) {
        return 'CUP';
    }

    return carModel < 50 ? 'GT3' : 'GT4';
};

const _getCategory = (cupCategory) => {
    switch (cupCategory) {
        case 0:
            return 'PRO';
        case 1:
            return 'SILVER';
        case 2:
            return 'AM';
        case 3:
            return 'ROOKIE';
        default:
            return 'ROOKIE';
    };
};

// TODO: support team name mapping file
const _getEntryName = (line, teamNameMapping) => {
    if (!teamNameMapping) {
        return `${line.currentDriver.firstName} ${line.currentDriver.lastName}`;
    }

    return '---';
};

const _msToTime = (ms) => {
    let msString = '';
    if (ms > 60000) {
        msString = new Date(ms).toISOString().slice(14, -1);
    }
    else {
        msString = new Date(ms).toISOString().slice(17, -1);
    }

    if (msString[0] === '0') {
        msString = msString.slice(1);
    }

    return msString
}

const _categorizeEntryObjects = (entries) => {
    const categorizedLines = entries.reduce((result, value) => {
        const key = `${value.class}-${value.category}`;
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(value);
        return result;
    }, {});


    return Object.keys(categorizedLines).map(key => {
        let category = categorizedLines[key];
        const pages = [];

        category = category.map((entry, idx) => {
            return {
                ...entry,
                position: `${idx + 1}`
            }
        });

        let i;
        for (i = 0; i < category.length; i += LINES_PER_PAGE) {
            pages.push(category.slice(i, i + LINES_PER_PAGE));
        }

        return {
            name: key,
            lines: pages
        };
    }).sort((a, b) => {
        const aIndex = PAGINATION_ORDER.indexOf(a.name);
        const bIndex = PAGINATION_ORDER.indexOf(b.name);
        if (aIndex < bIndex) {
            return -1;
        }
        if (aIndex > bIndex) {
            return 1;
        }
        return 0;
    });
};

export const ParseChampionshipResultsCSV = (csvData) => {
    const COLUMN_MAPPING = {
        position: 0,
        class: 1,
        category: 2,
        car_num: 3,
        name: 4,
        car: 5,
        points: 6,
        country: 7
    };

    let csvArray = CSVToArray(csvData, ',');
    csvArray.shift();
    const entries = csvArray.filter(entry => {
        return entry[COLUMN_MAPPING.name] !== '';
    }).map((entry, idx) => {
        let country = entry[COLUMN_MAPPING.country];
        country = country.replace(/\&/m, 'And').replace(/\s/m, '');
        if (!Countries[country]) {
            country = 'International';
        }
        
        return {
            id: idx,
            carNumber: entry[COLUMN_MAPPING.car_num],
            class: entry[COLUMN_MAPPING.class],
            name: entry[COLUMN_MAPPING.name],
            car: entry[COLUMN_MAPPING.car],
            category: entry[COLUMN_MAPPING.category].toUpperCase(),
            championshipStandings: {
                points: parseInt(entry[COLUMN_MAPPING.points], 10),
                deficit: 0
            },
            country
        }
    }).sort((a, b) => {
        if (a.championshipStandings.points > b.championshipStandings.points) {
            return -1;
        }
        if (a.championshipStandings.points < b.championshipStandings.points) {
            return 1;
        }
        return 0;
    });
    
    return _categorizeEntryObjects(entries);
};

export const ParseSessionResultJSON = (jsonData, teamNameMapping = undefined) => {
    const lines = jsonData.sessionResult.leaderBoardLines;
    const isRace = jsonData.sessionType === 'R';

    const firstPlaceLaps = lines[0].timing.lapCount;
    const firstPlaceTime = lines[0].timing.totalTime;
    const firstPlaceBestLap = lines[0].timing.bestLap;

    const _calculateTimeDeficit = (timing, isRace, idx) => {
        if (isRace) {
            if (timing.lapCount < firstPlaceLaps) {
                const lapCountDiff = firstPlaceLaps - timing.lapCount;
                return `+${lapCountDiff} lap${lapCountDiff > 1 ? 's' : ''}`;
            }
            else {
                return idx === 0 ? '' : `+${_msToTime(timing.totalTime - firstPlaceTime)}`;
            }
        } else {
            return idx === 0 ? '' : `+${_msToTime(timing.bestLap - firstPlaceBestLap)}`;
        }
    };

    const resObjects = lines.map((line, idx) => {
        return {
            id: line.car.carId,
            car: CarMapping[line.car.carModel],
            carNumber: line.car.raceNumber.toString(),
            category: _getCategory(line.car.cupCategory),
            class: _getClass(line.car.carModel),
            name: _getEntryName(line, teamNameMapping),
            points: '0',
            position: idx + 1,
            timing: {
                bestLap: _msToTime(line.timing.bestLap),
                deficit: _calculateTimeDeficit(line.timing, isRace, idx)
            },
            country: ''
        }
    });

    return _categorizeEntryObjects(resObjects);
};