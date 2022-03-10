import React from 'react';

import Outdoors from '../../components/about/outdoors/outdoors';
import Cars from '../../components/about/cars/cars';
import Gaming from '../../components/about/gaming/gaming';
import Movies from '../../components/about/movies/movies';
import Programming from '../../components/about/programming/programming';
import Projects from '../../components/about/project/projects';
import Sports from '../../components/about/sports/sports';
import TvShows from '../../components/about/tv-shows/tv-shows';
import Footer from '../../components/footer/footer';

const AboutMe = () => {
  return (
    <div>
      <Programming />
      <Gaming />
      <Movies />
      <TvShows />
      <Cars />
      <Projects />
      <Outdoors />
      <Sports />
      <Footer />
    </div>
  );
};

export default AboutMe;
