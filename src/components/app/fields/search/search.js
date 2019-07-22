import React, { Component } from 'react';
import './search.css';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let promise = new Promise(resolve => {
            this.setState({
                value: event.target.value
            })
            resolve()
        })
        promise
        .then(()=> this.props.inBudgetsSeached(this.state.value))
        .then(()=> this.props.termDataTableLoaded() )
    }
    render() {
        
        return (
            <div className='search'>

                <img src='https://vodkamishka.github.io/janus-test-app/images/icons-png/search.png' />

                <input
                    type='search'
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder='Search in budgets...'
                />


            </div>
        )
    }
}
