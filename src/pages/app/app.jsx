import React from 'react';

import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';
import MoreAbout from '../../components/more/more';
import Projects from '../../components/projects/projects';
import ContactMe from '../../components/contact-me/contact-me';
import Footer from '../../components/footer/footer';

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
