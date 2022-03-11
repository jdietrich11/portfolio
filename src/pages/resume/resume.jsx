import React from 'react';

import ResumeInfo from '../../components/resume-info/resume-info';
import Footer from '../../components/footer/footer';

import './resume.styles.scss';

class Resume extends React.Component {
  render() {
    return (
      <div className='resume-page'>
        <ResumeInfo />
        <Footer className='footer' />
      </div>
    );
  }
}

export default Resume;
