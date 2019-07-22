const initialState = {
    columns: {
        col1: false,
        col2: false,
        col3: false,
        col4: false,
        col5: false,
        col6: false
    },
    amount: {
        enough: false,
        exceeded: false,
        close: false
    },
    amountMiddlewear: {
        enough: false,
        exceeded: false,
        close: false
    }
    
}

const reducerShowHideColumn = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_HIDE_COLUMN':
            return {
                ...state,
                columns: {
                    ...state.columns,
                    ['col' + action.payload]: !state.columns['col' + action.payload]
                }
            }
        case 'AMOUNT_TOGGLE':
            return {
                ...state,
                amount: {
                    ...state.amount,
                    [action.payload]: !state.amount[action.payload]
                }
            }
        case 'SHOW_HIDE_ROW': 
            const {enough, exceeded, close} = action.payload;
            return {
                ...state, 
                amountMiddlewear: {
                    enough,
                    exceeded,
                    close
                }
            }
        default: return state;
    }
}

export default reducerShowHideColumn;