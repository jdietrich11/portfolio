import React from 'react';

import Footer from '../../components/footer/footer';

class Resume extends React.Component {
  render() {
    return (
      <>
        <div>
          <div>Joshua Dietrich</div>
          <div>Web Developer</div>
          <div>
            <div>3069 West 14600 South, Bluffdale, Utah, 84065</div>
            <div>jbdietrich2@gmail.com</div>
            <div>(385) 424-2323</div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Resume;
