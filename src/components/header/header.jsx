import React from 'react';

import './header.styles.scss';

class Header extends React.Component {
  handleMoreClick = () => {
    const more = document.querySelector('.more-container');
    more.scrollIntoView();
    console.log('done');
  };

  handleProjClick = () => {
    const proj = document.querySelector('.proj');
    proj.scrollIntoView();
    console.log('done');
  };
  handleContactClick = () => {
    const contact = document.querySelector('.contact-me-container');
    contact.scrollIntoView();
    console.log('done');
  };

  render() {
    return (
      <div className='menu'>
        <div className='home'>
          <img
            className='logo'
            src={require('../../data/logo/logo.png')}
            alt='my Logo'
          />
          <div>
            <div className='item' to='Intro'>
              Home
            </div>
          </div>
        </div>
        <div className='locations'>
          <div onClick={this.handleMoreClick} className='item'>
            About-Me
          </div>
          <div className='item' onClick={this.handleProjClick}>
            Projects
          </div>
          <div onClick={this.handleContactClick} className='item'>
            Contact-Me
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
