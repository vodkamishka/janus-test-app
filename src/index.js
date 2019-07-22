import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import { Provider } from 'react-redux';
import store from './store';
import { TableDataServiceProvider } from './components/table-data-context/table-data-context';

import TableDataService from './services/table-data-service';

const tableDataService = new TableDataService();


ReactDOM.render(
    <Provider store={store}>
        <TableDataServiceProvider value={tableDataService}>
            <App />
        </TableDataServiceProvider>
    </Provider>
    , document.getElementById('root'));


