import React from 'react';
import ContactMe from '../contact-me/contact-me';

import Footer from '../footer/footer';

import './app.styles.scss';

class App extends React.Component {
  render() {
    return (
      <div className='background'>
        APP
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

export default App;
