function addHistory(historyLists) {
    return {type: '@HISTORY/ADD_HISTORY', historyLists: historyLists};
}

function deleteHistory() {
    return {type: '@HISTORY/DELETE_HISTORY'};
}
