import React from 'react';
import { Link } from 'react-router-dom';

import './more.styles.scss';
import './more.media.styles.scss';

import CustomButton from '../custombutton/custombutton';

const MoreAbout = ({ show }) => {
  return (
    <div className='more-container'>
      <div className='more-text'>
        I have varying interests. Below are links to a blog about some of my
        personal interests and my resume respectively
      </div>
      <div className='link-container'>
        <Link className='link' to='/about'>
          <CustomButton data={'Personal Interests'} />
        </Link>
        <Link className='link' to='/resume'>
          <CustomButton data={'Resume'} />
        </Link>
      </div>
    </div>
  );
};
export default MoreAbout;
