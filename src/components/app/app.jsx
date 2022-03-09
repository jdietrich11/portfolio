import React from 'react';

import Header from '../header/header';
import Intro from '../intro/intro';
import MoreAbout from '../more/more';
import Projects from '../projects/projects';
import ContactMe from '../contact-me/contact-me';
import Footer from '../footer/footer';

import './app.styles.scss';

class App extends React.Component {
  render() {
    return (
      <div className='background'>
        <Header />
        <Intro />
        <MoreAbout />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

export default App;
