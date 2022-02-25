import React from 'react';

import './footer.styles.scss';
import '../../Icons/linkedin.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='backTop'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='svg'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M5 11l7-7 7 7M5 19l7-7 7 7'
          />
        </svg>
      </div>
      <div className='externalLinks'>
        <a href='https://www.linkedin.com/in/josh-dietrich-3b1501230/'>
          <img
            className='icon'
            src={require('../../Icons/linkedin.png')}
            alt='linkedin profile link'
          />
        </a>
        <a href='https://my.indeed.com/resume?hl=en&co=US&from=gnav-menu-homepage&_ga=2.239666947.1663842385.1645781449-2041203556.1640763861'>
          <img
            className='icon'
            src={require('../../Icons/indeed.png')}
            alt='indeed profile link'
          />
        </a>
        <a href='https://github.com/jdietrich11'>
          <img
            className='icon'
            src={require('../../Icons/github.png')}
            alt='github profile link'
          />
        </a>
        <a href='https://www.facebook.com/josh.dietrich.94'>
          <img
            className='icon'
            src={require('../../Icons/facebook.png')}
            alt='facebook profile link'
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
