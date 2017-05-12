import {getBookNTHU} from 'api/NTHU.js';
//import {getWeather as getWeatherFromApi, cancelWeather, getForecast as getForecastFromApi, cancelForecast} from 'api/open-weather-map.js';

/*  Unit */

function setSearchType(searchType) {
    return {type: '@TYPE/SET_TYPE', searchType: searchType};
}

/* Today */

function startSearch(searchText, searchType) {
    return {type: '@SEARCH/START_SEARCH', searchText, searchType};
}

function endSearch(lists) {
    return {type: '@WEATHER/END_SEARCH', lists};
}

function resetSearch() {
    return {type: '@SEARCH/RESET_SEARCH'};
}

function maskSearchBg() {
    return {type: '@SEARCH/MASK_SEARCH_BG'};
}

function unmaskSearchBg() {
    return {type: '@SEARCH/UNMASK_SEARCH_BG'};
}

export function getBook(searchText, searchType) {
    return (dispatch, getState) => {
        dispatch(resetSearch());
        dispatch(startSearch(searchText, searchType));
        dispatch(maskSearchBg());
        setTimeout(() => {
            dispatch(unmaskSearchBg());
        }, 600);

        return getBookNTHU(searchText, searchType).then(books => {
            const lists = books.data;
            dispatch(endSearch(lists));
            dispatch(setSearchType(searchType));
        }).catch(err => {
            console.error('Error getting book', err);
            dispatch(resetSearch());
        });
    };
};

/* SearchForm */

// export function toggleForm() {
//     return {type: '@WEATHER_FORM/TOGGLE_FORM'};
// }

export function input(value) {
    return {type: '@SEARCH_FORM/INPUT', value};
}

export function toggleSearchType() {
    return {type: '@SEARCH_FORM/TOGGLE_TYPE'};
}

export function selectSearchType(searchType) {
    return {type: '@SEARCH_FORM/SELECT_TYPE', searchType};
}

/* Forecast */

// function startGetForecast(city, unit) {
//     return {type: '@FORECAST/START_GET_FORECAST', city, unit};
// }
//
// function endGetForecast(city, list) {
//     return {type: '@FORECAST/END_GET_FORECAST', city, list};
// }
//
// function resetForecast() {
//     return {type: '@FORECAST/RESET_FORECAST'};
// }
//
// function maskForecastBg() {
//     return {type: '@FORECAST/MASK_FORECAST_BG'};
// }
//
// function unmaskForecastBg() {
//     return {type: '@FORECAST/UNMASK_FORECAST_BG'};
// }
//
// export function getForecast(city, unit) {
//     return (dispatch, getState) => {
//         dispatch(startGetForecast(city, unit));
//
//         dispatch(maskForecastBg());
//         setTimeout(() => {
//             dispatch(unmaskForecastBg());
//         }, 600);
//
//         return getForecastFromApi(city, unit).then(forecast => {
//             const {city, list, unit} = forecast;
//             dispatch(endGetForecast(city, list));
//             dispatch(setUnit(unit));
//         }).catch(err => {
//             console.error('Error getting forecast', err);
//             dispatch(resetForecast());
//         });
//     };
// };
