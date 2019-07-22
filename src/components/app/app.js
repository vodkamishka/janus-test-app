import React, { Component } from 'react';

import Table from './table/table';
import Pagination from './pagination/pagination';
import Budgets from './budgets/budgets';
import Fields from './fields/fields';
import ViewSettingsWindow from './view-settings-window/view-settings-window';
import FiltersWindow from './filters-window/filters-window';

import './app.css';

import withTableDataService from '../hoc/withTableDataService';
import { connect } from 'react-redux';
import { compose } from 'redux';

import 
{ dataTableLoaded, iconSettingsToggled, showHideColumnToggled,
  showHideWindowFilterToggle, columnSorted, inBudgetsSeached,
  termDataTableLoaded, buttonApplyed, amountToggled, settingsCleared  } from '../../actions';




class App extends Component {

    componentDidMount(){
            
            let promise = new Promise (resolve => {
                const {dataTableService, dataTableLoaded} = this.props;
                let data = dataTableService.getData();
                dataTableLoaded(data);
                resolve();
            })
            promise.then(() => {
                this.props.termDataTableLoaded();
            })

    }

    render() {
        let {
            iconSettingsToggled, showIconViewSettingsWindow,
            columns, showHideColumnToggled, showWindowFilter,
            showHideWindowFilterToggle, columnSorted,
            inBudgetsSeached, termDataTable, buttonApplyed,
            amount, amountToggled, amountMiddlewear, range,
            settingsCleared  
        } = this.props;
        
        let {dataTableService} = this.props;
        let columnsNames = dataTableService.getColumnsNames();
        
        return (
            <div className="app">
                <Budgets />
                <Fields 
                iconSettingsToggled = {iconSettingsToggled}
                showHideWindowFilterToggle = {showHideWindowFilterToggle}
                columnsNames = {columnsNames}
                columnSorted = {columnSorted}
                inBudgetsSeached = {inBudgetsSeached}
                termDataTableLoaded ={termDataTableLoaded }
                />
                { showWindowFilter ? <FiltersWindow 
                buttonApplyed ={buttonApplyed}
                termDataTable={termDataTable}
                amount={amount}
                amountToggled ={amountToggled }
                settingsCleared={settingsCleared}
                /> : null }
                { showIconViewSettingsWindow ? 
                <ViewSettingsWindow columnsNames = {columnsNames}
                showHideColumnToggled = {showHideColumnToggled}
                columns = {columns}
                
                /> : null }
                <Table 
                termDataTable  = {termDataTable  }
                columnsNames = {columnsNames}
                columns = {columns}
                amountMiddlewear={amountMiddlewear}
                range={range}
                />
                <Pagination />
            </div>
        )
    }
}

const mapStateToProps = ({ data, columns }) => {
    return {
        dataTable: data.dataTable,
        showIconViewSettingsWindow: data.showIconViewSettingsWindow,
        showWindowFilter: data.showWindowFilter,
        termDataTable: data.termDataTable,
        columns: columns.columns,
        amount: columns.amount,
        amountMiddlewear: columns.amountMiddlewear,
        range: data.range 
    }
}

const mapDispatchToProps = {
    dataTableLoaded,
    iconSettingsToggled,
    showHideColumnToggled,
    showHideWindowFilterToggle,
    columnSorted,
    inBudgetsSeached,
    termDataTableLoaded,
    buttonApplyed,
    amountToggled,
    settingsCleared 
}

export default compose(
    withTableDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(App)