import React, { Component } from 'react';
import './sort.css';

export default class Sort extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'Created at',  
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        let promise = new Promise (resolve => {
            this.setState({
                value: event.target.value
            
            });
            resolve();
        })
        promise.then(()=> {
            let key = this.state.value;
            if ( key === 'Budget name' ) { key = 'budgetName' }
            if ( key === 'PO number' ) { key = 'POnumber' }
            if ( key === 'Amount total, $' ) { key = 'amountTotal' }
            if ( key === 'Amount remaining, $' ) { key = 'amountRemaining' }
            if ( key === 'Created at' ) { key = 'createdAt' }
            if ( key === 'Projects' ) { key = 'projects' }
            this.props.columnSorted(key)
        })
    }

    render() {
        let { columnsNames } = this.props;
        let { value } = this.state;
        
        return (
            <div className='sort'>
                <span >Sort by: </span>
                <select
                    value={value}
                    onChange={ this.handleChange}
                >
                    {columnsNames.map(el => <option
                        key={el.id}
                        value={el.name}
                        
                    >{el.name}</option>)}
                </select>

            </div>
        )
    }
}