const DATA_TABLE_SERVICE_LOADED = 'DATA_TABLE_SERVICE_LOADED';
const ICON_VIEW_SETTINGS_TOGGLE = 'ICON_VIEW_SETTINGS_TOGGLE';
const SHOW_HIDE_WINDOW_FILTER = 'SHOW_HIDE_WINDOW_FILTER';
const SHOW_HIDE_COLUMN = 'SHOW_HIDE_COLUMN';
const SORT_COLUMN = 'SORT_COLUMN';
const SEARCH_IN_BUDGETS = 'SEARCH_IN_BUDGETS';
const TERM_DATA_TABLE_LOADED = 'TERM_DATA_TABLE_LOADED';
const FILTER_TIME = 'FILTER_TIME';
const FILTER_RELATED_PROJECT = 'FILTER_RELATED_PROJECT';
const AMOUNT_TOGGLE = 'AMOUNT_TOGGLE';
const SHOW_HIDE_ROW = 'SHOW_HIDE_ROW';
const INPUT_RANGE_COORDINATE = 'INPUT_RANGE_COORDINATE';
const CLEAR_ALL_SETTINGS = 'CLEAR_ALL_SETTINGS';

const dataTableLoaded = data => {
    return {
        type: DATA_TABLE_SERVICE_LOADED,
        payload: data
    }
}

const iconSettingsToggled = () => {
    return {
        type: ICON_VIEW_SETTINGS_TOGGLE
    }
}

const showHideWindowFilterToggle = () => {
    return {
        type: SHOW_HIDE_WINDOW_FILTER
    }
}

const showHideColumnToggled = id => {
    return {
        type: SHOW_HIDE_COLUMN,
        payload: id
    }
}

const showHideRowToggled = amount => {
    return {
        type: SHOW_HIDE_ROW,
        payload: amount
    }
}

const columnSorted = columnName => {
    return {
        type: SORT_COLUMN,
        payload: columnName
    }
}

const inBudgetsSeached = value => {
    return {
        type: SEARCH_IN_BUDGETS,
        payload: value
    }
}

const termDataTableLoaded = () => {
    return {
        type: TERM_DATA_TABLE_LOADED
    }
}

const timeFiltered = time => {
    return {
        type: FILTER_TIME,
        payload: time
    }
}

const projectLoaded = project => {
    return {
        type: FILTER_RELATED_PROJECT,
        payload: project
    }
}

const amountToggled  = amountName => {
    return {
        type: AMOUNT_TOGGLE,
        payload: amountName 
    }
}

const rangeCoordinatesReaded = coordinates => {
    return {
        type: INPUT_RANGE_COORDINATE,
        payload: coordinates
    }
}

const settingsCleared = () => {
    return {
        type: 'CLEAR_ALL_SETTINGS'
    }
}

const buttonApplyed = (time, project, amount, coordinates) => {
    
    return dispatch => {
       if (project !== '') {dispatch(projectLoaded(project))}
       if (time !=='') {dispatch(timeFiltered(time)) }
      
       dispatch(showHideRowToggled(amount))
       dispatch(rangeCoordinatesReaded(coordinates)) 
       dispatch(termDataTableLoaded())
    }
}

export { dataTableLoaded, iconSettingsToggled,
showHideColumnToggled, showHideWindowFilterToggle,
columnSorted, inBudgetsSeached, termDataTableLoaded,
buttonApplyed, amountToggled, settingsCleared };