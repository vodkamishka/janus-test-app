import React from 'react';
import './table.css';
import Thead from './thead/thead';
import Tbody from './tbody/tbody';


export default function Table({termDataTable, columnsNames, columns, amountMiddlewear, range}) {
    return (
        <div className="app__table">
            <table>
                <Thead 
                columnsNames={columnsNames}
                columns = {columns}
                />
                <Tbody 
                data = {termDataTable }
                columns = {columns}
                amountMiddlewear={amountMiddlewear}
                range={range}
                />
            </table>
        </div>
    )
}
