import React from 'react';
import './projects.css';

export default function Projects({projectsCount}) {
   
    return (
        <div className='projects'>
            <div className = 'projects-shevron'><span>{projectsCount} projects</span>
            <img src='https://vodkamishka.github.io/janus-test-app/images/icons-png/shevron.png' alt='shevron' />
            </div>
            <div>
            <img src='https://vodkamishka.github.io/janus-test-app/images/icons-png/menu-secondary.png' alt='menu-secondary' />   
            </div>
        </div>
    )
}
