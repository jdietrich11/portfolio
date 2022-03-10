import React from 'react';
import { Link } from 'react-router-dom';

import './more.styles.scss';

import CustomButton from '../custombutton/custombutton';

const MoreAbout = () => {
  return (
    <div className='more-container'>
      <div className='more-text'>
        I have varying interests. Below are links to a blog about some of my
        personal interests and my resume respectively
      </div>
      <Link className='link' to='/about'>
        <CustomButton data={'Personal Interests'} />
      </Link>
    </div>
  );
};
export default MoreAbout;
