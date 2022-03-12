import React from 'react';

import './header.styles.scss';
import './header.media.styles.scss';

class Header extends React.Component {
  handleHomeClick = () => {
    window.scroll(0, 0);
  };
  handleMoreClick = () => {
    const more = document.querySelector('.more-container');
    more.scrollIntoView();
  };

  handleProjClick = () => {
    const proj = document.querySelector('.proj');
    proj.scrollIntoView();
  };
  handleContactClick = () => {
    const contact = document.querySelector('.contact-me-container');
    contact.scrollIntoView();
  };

  render() {
    return (
      <div className='menu'>
        <div className='home'>
          <img
            className='logo'
            src={require('../../data/logo/logo.png')}
            alt='my Logo'
            onClick={this.handleHomeClick}
          />
          <div>
            <div onClick={this.handleHomeClick} className='item' to='Intro'>
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
