const initHistoryState = {
    historyLists: []
};

export function history(state = initHistoryState, action) {
    switch (action.type) {
        case '@HISTORY/ADD_HISTORY':
            return {
                ...state,
                historyLists: action.historyLists
            };
        case '@HISTORY/DELETE_HISTORY':
            return initSearchState;
        default:
            return state;
    }
}
