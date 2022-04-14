import React from 'react';

import CustomButton from '../custombutton/custombutton';
import projectData from '../../data/projectData';
import ProjectCard from '../project-card/project-card';

import './projects.styles.scss';
import './projects.media.scss';

class Projects extends React.Component {
  render() {
    return (
      <div className='proj'>
        <div className='area-title'>
          <h5 className='title'>Projects</h5>
          <div className='subtitle'>
            Here is a list of languages I have experience with...
          </div>
        </div>
        <div className='exp-container'>
          <div className='exp'>
            <div>
              <CustomButton className='custombtn' data={'HTML'} />
            </div>
            <div>
              <CustomButton className='custombtn' data={'CSS'} />
            </div>
            <div>
              <CustomButton className='custombtn' data={'SCSS'} />
            </div>
            <div>
              <CustomButton className='custombtn' data={'JavaScript'} />
            </div>
            <div>
              <CustomButton className='custombtn' data={'React'} />
            </div>
            <div>
              <CustomButton className='custombtn' data={'Redux'} />
            </div>
            <div>
              <CustomButton className='custombtn' data={'hooks'} />
            </div>
            <div>
              <CustomButton className='custombtn' data={'C++'} />
            </div>
          </div>
        </div>
        <div className='project-container'>
          {projectData.map((i) => {
            return (
              <div key={i.projectName}>
                <ProjectCard
                  key={i.projectName}
                  className='project-card'
                  data={i}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
