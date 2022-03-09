import React from 'react';

import './aboutme.styles.scss';

import Books from '../../components/about/books/books';
import Cars from '../../components/about/cars/cars';
import Gaming from '../../components/about/gaming/gaming';
import Movies from '../../components/about/movies/movies';
import Programming from '../../components/about/programming/programming';
import Projects from '../../components/about/project/projects';
import Sports from '../../components/about/sports/sports';
import TvShows from '../../components/about/tv-shows/tv-shows';

const AboutMe = () => {
  return (
    <div>
      <Programming />
      <Gaming />
      <Movies />
      <TvShows />
      <Books />
      <Cars />
      <Projects />
      <Sports />
    </div>
  );
};

export default AboutMe;
