import React from 'react';

const Links = ({ data }) => {
  return (
    <a href={data.linkSrc} key={data.name}>
      <img className='icon' src={data.src} alt={data.description} />
    </a>
  );
};

export default Links;
