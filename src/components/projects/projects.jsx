import React from 'react';

import projectData from '../../data/projectData';
import ProjectCard from '../project-card/project-card';

import './projects.styles.scss';

class Projects extends React.Component {
  render() {
    return (
      <div className='proj'>
        <h5>Projects</h5>
        <div>
          <ProjectCard data={projectData} />
        </div>
      </div>
    );
  }
}

export default Projects;
