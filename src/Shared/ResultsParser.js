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
    'GT4-PRO',
    'GT4-SILVER',
    'GT4-AM',
    'GT4-ROOKIE',
    'CUP-PRO',
    'CUP-SILVER',
    'CUP-AM',
    'CUP-ROOKIE',
    'ST-PRO',
    'ST-SILVER',
    'ST-AM',
    'ST-ROOKIE',
    'TCX-PRO',
    'TCX-SILVER',
    'TCX-AM',
    'TCX-ROOKIE',
    'CHL-PRO',
    'CHL-SILVER',
    'CHL-AM',
    'CHL-ROOKIE'
];

/*
-1 for cup: mixed
-1 for category: overall

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

            */

export const ParseAPIResponse = (jsonData) => {
    const standingEntries = [];
    var mode = 1;

    const isTeamEvent = jsonData.teamEvent;

    Object.keys(jsonData.standings).forEach(carClass => {
        mode = carClass == -1 ? 3 : mode;
        Object.keys(jsonData.standings[carClass]).forEach(category => {
            mode = category == -1 ? 2 : mode;
            jsonData.standings[carClass][category].forEach(line => {
                const newLine = {
                    id: line.id,
                    carNumber: line.signup.raceNumber,
                    class: line.signup.car.cup,
                    className: _getClass(line.signup.car.cup),
                    name: isTeamEvent ? line.signup.fullTeamName : line.signup.drivers[0].userFullName,
                    car: line.signup.car.label,
                    category: line.signup.driverCategory,
                    categoryName: _getCategory(line.signup.driverCategory),
                    championshipStandings: {
                        points: line.position !== null ? parseFloat(line.points) : '-',
                        deficit: 0
                    },
                    country: line.signup.fullNationality.replace(/\&/mg, 'And').replace(/\sand\s/mg, 'And').replace(/\s/mg, '')
                }

                standingEntries.push(newLine);
            })
        });
    });

    return _categorizeEntryObjects(standingEntries, mode);
};

const _getClass = (cup) => {
    switch (cup) {
        case -1: return 'Mixed';
        case 1: return 'GT3';
        case 2: return 'GT4';
        case 3: return 'CUP';
        case 4: return 'ST';
        case 5: return 'TCX';
        case 6: return 'CHL';
    }
};

const _getCategory = (cupCategory) => {
    switch (cupCategory) {
        case -1: return 'Overall';
        case 0: return 'ROOKIE';
        case 1: return 'AM';
        case 2: return 'SILVER';
        case 3: return 'PRO';
        default: return 'ROOKIE';
    };
};

// TODO: support team name mapping file
const _getEntryName = (line, teamNameMapping) => {
    if (!teamNameMapping) {
        // return `${line.currentDriver.firstName} ${line.currentDriver.lastName}`;
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

const _categorizeEntryObjects = (entries, mode) => {
    const categorizedLines = entries.reduce((result, line) => {
        const classStr = mode == 3 ? 'MIXED' : _getClass(line.class)
        const categoryStr = mode == 2 ? 'OVERALL' : _getCategory(line.category)

        const key = `${classStr}-${categoryStr}`;
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(line);
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

const isoCountries = {
    'AF': 'Afghanistan',
    'AX': 'Aland Islands',
    'AL': 'Albania',
    'DZ': 'Algeria',
    'AS': 'American Samoa',
    'AD': 'Andorra',
    'AO': 'Angola',
    'AI': 'Anguilla',
    'AQ': 'Antarctica',
    'AG': 'Antigua And Barbuda',
    'AR': 'Argentina',
    'AM': 'Armenia',
    'AW': 'Aruba',
    'AU': 'Australia',
    'AT': 'Austria',
    'AZ': 'Azerbaijan',
    'BS': 'Bahamas',
    'BH': 'Bahrain',
    'BD': 'Bangladesh',
    'BB': 'Barbados',
    'BY': 'Belarus',
    'BE': 'Belgium',
    'BZ': 'Belize',
    'BJ': 'Benin',
    'BM': 'Bermuda',
    'BT': 'Bhutan',
    'BO': 'Bolivia',
    'BA': 'Bosnia And Herzegovina',
    'BW': 'Botswana',
    'BV': 'Bouvet Island',
    'BR': 'Brazil',
    'IO': 'British Indian Ocean Territory',
    'BN': 'Brunei Darussalam',
    'BG': 'Bulgaria',
    'BF': 'Burkina Faso',
    'BI': 'Burundi',
    'KH': 'Cambodia',
    'CM': 'Cameroon',
    'CA': 'Canada',
    'CV': 'Cape Verde',
    'KY': 'Cayman Islands',
    'CF': 'Central African Republic',
    'TD': 'Chad',
    'CL': 'Chile',
    'CN': 'China',
    'CX': 'Christmas Island',
    'CC': 'Cocos (Keeling) Islands',
    'CO': 'Colombia',
    'KM': 'Comoros',
    'CG': 'Congo',
    'CD': 'Congo, Democratic Republic',
    'CK': 'Cook Islands',
    'CR': 'Costa Rica',
    'CI': 'Cote D\'Ivoire',
    'HR': 'Croatia',
    'CU': 'Cuba',
    'CY': 'Cyprus',
    'CZ': 'Czech Republic',
    'DK': 'Denmark',
    'DJ': 'Djibouti',
    'DM': 'Dominica',
    'DO': 'Dominican Republic',
    'EC': 'Ecuador',
    'EG': 'Egypt',
    'SV': 'El Salvador',
    'GQ': 'Equatorial Guinea',
    'ER': 'Eritrea',
    'EE': 'Estonia',
    'ET': 'Ethiopia',
    'FK': 'Falkland Islands (Malvinas)',
    'FO': 'Faroe Islands',
    'FJ': 'Fiji',
    'FI': 'Finland',
    'FR': 'France',
    'GF': 'French Guiana',
    'PF': 'French Polynesia',
    'TF': 'French Southern Territories',
    'GA': 'Gabon',
    'GM': 'Gambia',
    'GE': 'Georgia',
    'DE': 'Germany',
    'GH': 'Ghana',
    'GI': 'Gibraltar',
    'GR': 'Greece',
    'GL': 'Greenland',
    'GD': 'Grenada',
    'GP': 'Guadeloupe',
    'GU': 'Guam',
    'GT': 'Guatemala',
    'GG': 'Guernsey',
    'GN': 'Guinea',
    'GW': 'Guinea-Bissau',
    'GY': 'Guyana',
    'HT': 'Haiti',
    'HM': 'Heard Island & Mcdonald Islands',
    'VA': 'Holy See (Vatican City State)',
    'HN': 'Honduras',
    'HK': 'Hong Kong',
    'HU': 'Hungary',
    'IS': 'Iceland',
    'IN': 'India',
    'ID': 'Indonesia',
    'IR': 'Iran, Islamic Republic Of',
    'IQ': 'Iraq',
    'IE': 'Ireland',
    'IM': 'Isle Of Man',
    'IL': 'Israel',
    'IT': 'Italy',
    'JM': 'Jamaica',
    'JP': 'Japan',
    'JE': 'Jersey',
    'JO': 'Jordan',
    'KZ': 'Kazakhstan',
    'KE': 'Kenya',
    'KI': 'Kiribati',
    'KR': 'Korea',
    'KW': 'Kuwait',
    'KG': 'Kyrgyzstan',
    'LA': 'Lao People\'s Democratic Republic',
    'LV': 'Latvia',
    'LB': 'Lebanon',
    'LS': 'Lesotho',
    'LR': 'Liberia',
    'LY': 'Libyan Arab Jamahiriya',
    'LI': 'Liechtenstein',
    'LT': 'Lithuania',
    'LU': 'Luxembourg',
    'MO': 'Macao',
    'MK': 'Macedonia',
    'MG': 'Madagascar',
    'MW': 'Malawi',
    'MY': 'Malaysia',
    'MV': 'Maldives',
    'ML': 'Mali',
    'MT': 'Malta',
    'MH': 'Marshall Islands',
    'MQ': 'Martinique',
    'MR': 'Mauritania',
    'MU': 'Mauritius',
    'YT': 'Mayotte',
    'MX': 'Mexico',
    'FM': 'Micronesia, Federated States Of',
    'MD': 'Moldova',
    'MC': 'Monaco',
    'MN': 'Mongolia',
    'ME': 'Montenegro',
    'MS': 'Montserrat',
    'MA': 'Morocco',
    'MZ': 'Mozambique',
    'MM': 'Myanmar',
    'NA': 'Namibia',
    'NR': 'Nauru',
    'NP': 'Nepal',
    'NL': 'Netherlands',
    'AN': 'Netherlands Antilles',
    'NC': 'New Caledonia',
    'NZ': 'New Zealand',
    'NI': 'Nicaragua',
    'NE': 'Niger',
    'NG': 'Nigeria',
    'NU': 'Niue',
    'NF': 'Norfolk Island',
    'GB-NIR': 'Northern Ireland',
    'MP': 'Northern Mariana Islands',
    'NO': 'Norway',
    'OM': 'Oman',
    'PK': 'Pakistan',
    'PW': 'Palau',
    'PS': 'Palestinian Territory, Occupied',
    'PA': 'Panama',
    'PG': 'Papua New Guinea',
    'PY': 'Paraguay',
    'PE': 'Peru',
    'PH': 'Philippines',
    'PN': 'Pitcairn',
    'PL': 'Poland',
    'PT': 'Portugal',
    'PR': 'Puerto Rico',
    'QA': 'Qatar',
    'RE': 'Reunion',
    'RO': 'Romania',
    'RU': 'Russian Federation',
    'RW': 'Rwanda',
    'BL': 'Saint Barthelemy',
    'SH': 'Saint Helena',
    'KN': 'Saint Kitts And Nevis',
    'LC': 'Saint Lucia',
    'MF': 'Saint Martin',
    'PM': 'Saint Pierre And Miquelon',
    'VC': 'Saint Vincent And Grenadines',
    'WS': 'Samoa',
    'SM': 'San Marino',
    'ST': 'Sao Tome And Principe',
    'SA': 'Saudi Arabia',
    'GB-SCT': 'Scotland',
    'SN': 'Senegal',
    'RS': 'Serbia',
    'SC': 'Seychelles',
    'SL': 'Sierra Leone',
    'SG': 'Singapore',
    'SK': 'Slovakia',
    'SI': 'Slovenia',
    'SB': 'Solomon Islands',
    'SO': 'Somalia',
    'ZA': 'South Africa',
    'GS': 'South Georgia And Sandwich Isl.',
    'ES': 'Spain',
    'LK': 'Sri Lanka',
    'SD': 'Sudan',
    'SR': 'Suriname',
    'SJ': 'Svalbard And Jan Mayen',
    'SZ': 'Swaziland',
    'SE': 'Sweden',
    'CH': 'Switzerland',
    'SY': 'Syrian Arab Republic',
    'TW': 'Taiwan',
    'TJ': 'Tajikistan',
    'TZ': 'Tanzania',
    'TH': 'Thailand',
    'TL': 'Timor-Leste',
    'TG': 'Togo',
    'TK': 'Tokelau',
    'TO': 'Tonga',
    'TT': 'Trinidad And Tobago',
    'TN': 'Tunisia',
    'TR': 'Turkey',
    'TM': 'Turkmenistan',
    'TC': 'Turks And Caicos Islands',
    'TV': 'Tuvalu',
    'UG': 'Uganda',
    'UA': 'Ukraine',
    'AE': 'United Arab Emirates',
    'GB': 'United Kingdom',
    'US': 'United States',
    'UM': 'United States Outlying Islands',
    'UY': 'Uruguay',
    'UZ': 'Uzbekistan',
    'VU': 'Vanuatu',
    'VE': 'Venezuela',
    'VN': 'Viet Nam',
    'VG': 'Virgin Islands, British',
    'VI': 'Virgin Islands, U.S.',
    'WF': 'Wallis And Futuna',
    'EH': 'Western Sahara',
    'YE': 'Yemen',
    'ZM': 'Zambia',
    'ZW': 'Zimbabwe'
};

const getCountryName = (countryCode) => {
    countryCode = countryCode === 'gb-eng' ? 'gb' : countryCode;

    if (isoCountries.hasOwnProperty(countryCode.toUpperCase())) {
        const name = isoCountries[countryCode.toUpperCase()];
        const fixedName = name.replace(/\s/m, '');
        return fixedName;
    } else {
        return countryCode;
    }
}

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