import React from 'react';

import './project-card.styles.scss';
import './project-card.media.scss';

function ProjectCard({ data }) {
  let langs = data.languagesUsed;
  return (
    <div className='card'>
      <div className='card__side card__side--front'>
        <div className='card__layer'>
          <div className='logo-box'>
            <div
              style={{ backgroundImage: `url(${data.logo})` }}
              className='card__logo'
            ></div>
          </div>
          <div className='card__front-details'>
            <div className='card__title'>{data.projectName}</div>
            <div className='card__sub'>{data.subtitle}</div>
            <div className='card__langs'>
              <div className='card__langs__title'>Langues Used:</div>
              {langs.map((i) => {
                return (
                  <div className='card__langs__lang' key={i}>
                    {i}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='card__side card__side--back'>
        <div
          className='back'
          style={{ backgroundImage: `url(${data.projectImg})` }}
        >
          <div className='back__background'>
            <a href={data.liveLink}>
              <button className='back__btn back__btn-live'>Live!</button>
            </a>
            <a href={data.githubLink}>
              <button className='back__btn back__btn-github'>Github</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
