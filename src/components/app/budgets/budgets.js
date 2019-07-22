import React from 'react';
import './budgets.css';

export default function Budgets() {
    return (
        <div className = 'app__budgets'>
            <div className  = 'title'>Budgets</div>
            <div className = 'button'>
                <button><span>+</span> New budget</button>
            </div>
        </div>
    )
}
