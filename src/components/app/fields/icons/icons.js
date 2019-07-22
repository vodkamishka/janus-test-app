import React from 'react';
import './icons.css';

export default function Icons({iconSettingsToggled, showHideWindowFilterToggle}) {
    return (
        <div className='icons'>
            <div className='filters'><img
            onClick = {showHideWindowFilterToggle}
            src='https://vodkamishka.github.io/janus-test-app/images/icons-png/filters.png' 
            alt='filters' /></div>
            <div><img 
            src='https://vodkamishka.github.io/janus-test-app/images/icons-png/view-settings.png' 
            alt='view-settings'
            onClick = {iconSettingsToggled} 
            /></div>
        </div>
    )
}
