import React from 'react';

import projectData from '../../data/projectData';
import ProjectCard from '../project-card/project-card';

import './projects.styles.scss';

class Projects extends React.Component {
  render() {
    return (
      <div className='proj'>
        <h5 className='area-title'>Projects</h5>
        <div className='project-container'>
          <ProjectCard data={projectData[0]} />
          <ProjectCard data={projectData[1]} />
          <ProjectCard data={projectData[2]} />
          <ProjectCard data={projectData[3]} />
        </div>
      </div>
    );
  }
}

export default Projects;
