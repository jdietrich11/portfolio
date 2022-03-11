import React from 'react';

import Footer from '../../components/footer/footer';

import './resume.styles.scss';

class Resume extends React.Component {
  render() {
    return (
      <>
        <div className='resume'>
          <div className='section'>
            <div className='my-name'>Joshua Dietrich</div>
            <div className='my-title'>Web Developer</div>
            <div className='about-info'>
              <div className='address'>
                3069 West 14600 South, Bluffdale, Utah, 84065
              </div>
              <div className='email'>joshua@joshdietrich.org</div>
              <div className='phoneNumber'>(385) 424-2323</div>
            </div>
          </div>
          <div className='section'>
            <div className='section-title'>ABOUT ME</div>
            <div className='section-info'>
              I am an aspiring Front End Developer/Full Stack Developer. I am a
              self taught programmer with experience with JavaScript, React,
              Redux, Hooks, MySQL, SQL, GIT, HTML, CSS and SCSS. I am currently
              learning how to use Node.js, Express, and MongoDB. Feel free to
              look at my work on Github, or reach out to joshua@joshdietrich.org
            </div>
          </div>
          <div className='section'>
            <div className='section-title'>PROFESSIONAL EXPERIENCE</div>
            <div className='job'>
              <div className='job-title'>Security Guard</div>
              <div className='company'>Allied Universal</div>
              <div className='job-description'>
                Patrol and monitor property. Deter and detecting security and
                safety risks. Detailed reporting every shift. Greeting
                employeeʼs as they enter the building.
              </div>
            </div>
            <div className='job'>
              <div className='job-title'>
                IT Manager, Supervisor, & Teachers Assistant
              </div>
              <div className='company'>Kaizen Academy RTC</div>
              <div className='job-description'>
                Mentor boys at the residential treatment home for troubled youth
                and maintain necessary boundaries. Tutor the boys in a variety
                of school subjects. Monitor boys activities, conversations, and
                engage to build relationships. As well as managed all company
                tech.
              </div>
            </div>
            <div className='job'>
              <div className='job-title'>Department Supervisor</div>
              <div className='company'>Skyline Secruity Managment</div>
              <div className='job-description'>
                Developed department structure, boarding process for new
                employees, created training programs, wrote manuals and
                certification tests, assisted the executive team with time
                sensitive projects, created plans to improve employees
                performance, managed schedules and time clock entries.
              </div>
            </div>
          </div>
          <div className='section'>
            <div className='section-title'>PROGRAMMING EXPERIENCE</div>
            <div className='experiences'>
              <div className='prog-lang'>HTML</div>
              <div className='prog-lang'>CSS</div>
              <div className='prog-lang'>SCSS</div>
              <div className='prog-lang'>C++</div>
              <div className='prog-lang'>JavaScript</div>
              <div className='prog-lang'>React</div>
              <div className='prog-lang'>Hooks</div>
              <div className='prog-lang'>Redux</div>
            </div>
          </div>
          <div className='section'>
            <div className='section-title'>AWARDS</div>
            <div className='award'>
              <div className='award-name'>2019 Kaizen Employee of the year</div>
              <div className='company'>Kaizen Academy RTC</div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Resume;
