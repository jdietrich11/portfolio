import React from 'react';

import './more.styles.scss';

import CustomButton from '../custombutton/custombutton';

const MoreAbout = () => {
  return (
    <div className='more-container'>
      <div className='more-text'>
        I consider myself a man of many interests varying from camping to
        basketball to gaming and movies, for more about me and my personal
        interests...
      </div>
      <CustomButton data={'click here'} />
    </div>
  );
};
export default MoreAbout;
