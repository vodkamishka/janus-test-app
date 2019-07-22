import React from 'react';
import './pagination.css';

export default function Pagination() {
    return (
        <div className='app__pagination'>
            
            <div className='pagination'>
                <div className='arrow-disable'><img src='https://vodkamishka.github.io/janus-test-app/images/icons-png/arrow-disable.png' alt='arrow-disable' /></div>
                <div>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>...</li>
                    </ul>
                </div>
                <div className='arrow-enable'><img src='https://vodkamishka.github.io/janus-test-app/images/icons-png/arrow-enable.png' alt='arrow-enable' /></div>
                <div>Show on page:</div>
                <div className='count-rows'>20</div>
                <div><img src = 'https://vodkamishka.github.io/janus-test-app/images/icons-png/arrow-down.png' alt='arrow-down' /></div>
            </div>


        </div>
    )
}
