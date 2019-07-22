import React from 'react';
import { TableDataServiceConsumer } from '../table-data-context/table-data-context';

const withTableDataService = () => Component => {

    return props => {
        return (
            <TableDataServiceConsumer>
                {
                    dataTableService => {
                        return (
                            <Component {...props} dataTableService={dataTableService} />
                        )
                    }
                }
            </TableDataServiceConsumer>
        )
    }
}

export default withTableDataService;