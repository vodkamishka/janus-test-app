import React from 'react';
import './view-settings-window.css';

export default function ViewSettingsWindow({ columnsNames, showHideColumnToggled, columns }) {
    return (
        <div className='view-settings-window'>

            <ul>
                {columnsNames.map(el => {

                    return (
                        <li
                            key={el.id}
                            className='li'
                        >
                            <img
                                onClick={() => {
                                    showHideColumnToggled(el.id)
                                }}
                                src={columns['col' + el.id] ? 
                                'https://vodkamishka.github.io/janus-test-app/images/icons-png/checkbox-enable.png' : 
                                'https://vodkamishka.github.io/janus-test-app/images/icons-png/checkbox-applyed.png'}
                                alt='checkbox-applyed' />
                            <span>{el.name}</span>


                        </li>

                    )
                }

                )}
            </ul>

        </div>
    )
}
