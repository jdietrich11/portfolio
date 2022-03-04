import React from 'react';

import Intro from '../intro/intro';
import Projects from '../projects/projects';
import ContactMe from '../contact-me/contact-me';
import Footer from '../footer/footer';

import './app.styles.scss';

class App extends React.Component {
  render() {
    return (
      <div className='background'>
        <Intro />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

export default App;
