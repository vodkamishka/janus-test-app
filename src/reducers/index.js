const initialState = {
    dataTable: [],
    showIconViewSettingsWindow: false,
    showWindowFilter: false,
    termDataTable: [],
    range: 50000
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'DATA_TABLE_SERVICE_LOADED':
            return {
                ...state,
                dataTable: action.payload
            }
        case 'TERM_DATA_TABLE_LOADED':
            let termDataTable = [...state.termDataTable];
            if (termDataTable.length === 0) { termDataTable = [...state.dataTable] }

            return {
                ...state,
                termDataTable: termDataTable
            }
        case 'CLEAR_ALL_SETTINGS': 
            return {
                ...state,
                termDataTable: state.dataTable
            }
        case 'ICON_VIEW_SETTINGS_TOGGLE':
            return {
                ...state,
                showIconViewSettingsWindow: !state.showIconViewSettingsWindow
            }
        case 'SHOW_HIDE_WINDOW_FILTER':
            return {
                ...state,
                showWindowFilter: !state.showWindowFilter
            }
        case 'SORT_COLUMN':

            let key = action.payload;
            let f = key => {
                return function (a, b) {
                    return a[key] > b[key] ? 1 : -1
                }
            }

            return {
                ...state,
                termDataTable: [...state.termDataTable.sort(f(key))]
            }
        case 'SEARCH_IN_BUDGETS':
            let value = action.payload.toLowerCase();
            if (value.length === 0) {
                return {
                    ...state,
                    termDataTable: state.dataTable
                }
            }
            return {
                ...state,
                termDataTable: [...state.termDataTable.filter(el => el.budgetName.toLowerCase().indexOf(value) > -1)]
            }
        case 'FILTER_TIME':
            let time = new Date(action.payload);
            
            return {
                ...state,
                termDataTable: [...state.termDataTable.filter(el => (new Date(el.createdAt)).getTime() === time.getTime())]
            };
        case 'FILTER_RELATED_PROJECT':
            
            return {
                ...state,
                termDataTable: [...state.termDataTable.filter(el => el.projects.some(element => element.name === action.payload))]
            }
        case 'INPUT_RANGE_COORDINATE':
           
            return {
                ...state,
                range: action.payload
            }
        default: return state;
    }
}

export default reducer;