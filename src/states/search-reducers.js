const initsearchTypeState = 'name';

export function searchType(state = initsearchTypeState, action) {
    switch (action.type) {
        case '@TYPE/SET_TYPE':
            return action.type;
        default:
            return state;
    }
}

const initSearchState = {
    // bookName: 'na',
    // bookISBN: -1,
    searchText: '',
    searchLoading: false,
    masking: false,
    hasSearched: false,
    // list: []
    lists: [
        // {
        //     bookName: 'OuO',
        //     author: 'SSBL',
        //     location: 'here'
        // }, {
        //     bookName: 'OuOooo',
        //     author: 'SSBLLL',
        //     location: 'there'
        // }
    ]
};

export function search(state = initSearchState, action) {
    switch (action.type) {
        case '@SEARCH/START_SEARCH':
            if (action.searchType === 'isbn') {
                return {
                    ...state,
                    //bookName: 'na',
                    searchText: action.searchText, // set city state immediately to prevent input text (in WeatherForm) from blinking
                    searchLoading: true
                };
            } else {
                return {
                    ...state,
                    //bookISBN: -1,
                    searchText: action.searchText,
                    searchLoading: true
                }
            }
        case '@SEARCH/END_SEARCH':
            return {bookName: action.bookName, bookISBN: action.bookISBN, searchLoading: false, hasSearched: true};
        case '@SEARCH/MASK_SEARCH_BG':
            return {
                ...state,
                masking: true
            };
        case '@SEARCH/UNMASK_SEARCH_BG':
            return {
                ...state,
                masking: false
            };
        case '@SEARCH/RESET_SEARCH':
            return {
                ...initSearchState,
                masking: state.masking,
                hasSearched: true
            };
        default:
            return state;
    }
}

const initSearchFormState = {
    inputValue: null,
    searchTypeToggle: false,
    searchType: null
    // searchText: null
};

export function searchForm(state = initSearchFormState, action) {
    switch (action.type) {
            // case '@WEATHER_FORM/TOGGLE_FORM':
            //     return {
            //         ...state,
            //         formToggle: !state.formToggle
            //     };
        case '@SEARCH_FORM/INPUT':
            return {
                ...state,
                inputValue: action.value
            };
        case '@SEARCH_FORM/TOGGLE_TYPE':
            return {
                ...state,
                searchTypeToggle: !state.searchTypeToggle
            };
        case '@SEARCH_FORM/SELECT_TYPE':
            return {
                ...state,
                searchType: action.searchType
            };
        default:
            return state;
    }
}

function getInitForecastState() {
    let list = [];
    for (let i = 0; i < 5; i++) {
        list[i] = {
            ts: -i,
            code: -1,
            group: 'na',
            description: 'N/A',
            temp: NaN
        };
    }
    return {city: 'na', list, forecastLoading: false, masking: false};
}

export function forecast(state = getInitForecastState(), action) {
    switch (action.type) {
        case '@FORECAST/START_GET_FORECAST':
            return {
                ...state,
                city: action.city, // set city state immediately to prevent input text (in WeatherForm) from blinking
                forecastLoading: true
            };
        case '@FORECAST/END_GET_FORECAST':
            return {
                ...state,
                city: action.city,
                list: action.list,
                forecastLoading: false
            };
        case '@FORECAST/MASK_FORECAST_BG':
            return {
                ...state,
                masking: true
            };
        case '@FORECAST/UNMASK_FORECAST_BG':
            return {
                ...state,
                masking: false
            };
        case '@FORECAST/RESET_FORECAST':
            return {
                ...getInitForecastState(),
                masking: state.masking
            };
        default:
            return state;
    }
}
