import React from 'react';

import CustomButton from '../custombutton/custombutton';

import './intro.styles.scss';

class Intro extends React.Component {
  render() {
    return (
      <div className='intro-container'>
        <div className='backgroundimg'></div>
        <div className='foreground'>
          <div className='myname'>Hi, I'm Josh Dietrich</div>
          <div className='mytitle'>Web developer</div>
          <div className='myintro-container'>
            <div className='myintro'>
              I'm an aspiring web developer. I'm currently looking to begin a
              professional career in programming. Currently my focus is learning
              by taking courses on UDEMY and building projects to gain
              experience.
            </div>
          </div>
          <div className='contactbtn'>
            <CustomButton data={'Contact Me!'} className='custombtn' />
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
