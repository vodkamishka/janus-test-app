import React from 'react';
import './tbody.css';
import Projects from './projects/projects';

export default function Tbody({ data, columns, amountMiddlewear, range }) {
    
     const {enough, exceeded, close} = amountMiddlewear; 
     
    return (
        <tbody>

            {data.map(el => {
                return (
                    <tr key={el.id}
                    className = {
                        enough && el.amountRemaining < 3500 ? 'hide' :
                        exceeded && el.amountRemaining > 21000 ? 'hide':
                        close && 1500 < el.amountRemaining && el.amountRemaining < 21000 ? 'hide':
                        el.amountTotal > range ? 'hide':
                        null
                    }
                    >
                        <td className={columns.col1 ? 'hide' : 'col1' }>{el.budgetName}</td>
                        <td className={columns.col2 ? 'hide' : 'col2' }>{el.POnumber}</td>
                        <td className={columns.col3 ? 'hide' : 'col3' }>{el.amountTotal}</td>
                        <td className={columns.col4 ? 'hide' : 'col4' }><span
                            className={el.amountRemaining < 3500 ? 'orange' :
                                el.amountRemaining > 21000 ? 'red' : null
                            }
                        >{el.amountRemaining}</span></td>
                        <td className={columns.col5 ? 'hide' : 'col5' }>{el.createdAt}</td>
                        <td className={columns.col6 ? 'hide' : 'col6' }>{el.projects.map(element => <span key={element.id}>{element.name}</span>)}</td>
                        <td className='col7'><Projects projectsCount = {el.projects.length}/></td>
                    </tr>
                )
            })}

        </tbody>
    )
}
