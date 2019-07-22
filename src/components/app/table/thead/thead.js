import React from 'react';
import './thead.css';

export default function Thead({ columnsNames, columns  }) {
    return (
        <thead className="thead">
            <tr>
                {columnsNames.map(el => <th key = {el.id} className={columns['col' + el.id] ? 'hide' : 'col' + el.id}>{el.name}</th>)}
                <th className='col7'></th>
            </tr>
        </thead>
    )
}
