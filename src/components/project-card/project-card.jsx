import React, { useState } from 'react';

import './project-card.styles.scss';

function ProjectCard({ data }) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div className='contianer'>
      <div
        className='card'
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <h3 className='title'>{data.projectName}</h3>
        <p className='subtitle'>{data.subtitle}</p>
        <img className='image' src={data.projectImg} alt={data.projectName} />
        <div className={hovered ? 'buttons overlay' : 'hidden'}>
          <a href={data.liveLink}>
            <button className='btn live'>Live!</button>
          </a>
          <a href={data.githubLink}>
            <button className='btn git'>GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
