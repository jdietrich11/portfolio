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
          <div className='list'>
            <div className='used'>What I used</div>
            <ul className='ul'>
              <li className='li'>{data.languagesUsed[0]}</li>
              <li className='li'>{data.languagesUsed[1]}</li>
              <li className='li'>{data.languagesUsed[2]}</li>
              <li className='li'>{data.languagesUsed[3]}</li>
            </ul>
          </div>
          <div className='bottom-buttons'>
            <div>
              <a href={data.liveLink}>
                <button className='btn live'>Live!</button>
              </a>
            </div>
            <div>
              <a href={data.githubLink}>
                <button className='btn git'>GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
