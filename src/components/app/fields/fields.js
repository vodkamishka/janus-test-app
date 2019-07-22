import React from 'react';
import './fields.css';
import Sort from './sort/sort';
import Search from './search/search';
import Icons from './icons/icons';

export default function Fields({iconSettingsToggled, showHideWindowFilterToggle, columnsNames, columnSorted, inBudgetsSeached, termDataTableLoaded }) {
    return (
        <div className="app__fields">
            <Sort 
            columnsNames = { columnsNames }
            columnSorted = { columnSorted }
            />
            <Search inBudgetsSeached={inBudgetsSeached}
            termDataTableLoaded ={termDataTableLoaded }
            />
            <Icons 
            iconSettingsToggled = { iconSettingsToggled }
            showHideWindowFilterToggle = { showHideWindowFilterToggle }
            />
        </div>
    )
}
