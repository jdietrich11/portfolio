import React from 'react';

const Movies = () => {
  return (
    <div className='about-container'>
      <div className='sidename'>
        <div className='sidename-title'>Movies</div>
      </div>
      <div className='content'>
        <div className='question'>What are your favorite Movies?</div>
        <div className='answer'>
          <ol>
            <li>The Princess Bride</li>
            <li>LOTR Trilogy</li>
            <li>Batman: Under the Red Hood</li>
            <li>Godzilla</li>
            <li>10 things I hate about you</li>
            <li>A Kights Tale</li>
          </ol>
        </div>
        <div className='question'>Why not Starwars?</div>
        <div className='answer'>
          It used to be at the top of my list of favorite movies, but after the
          last Jedi it was removed from my favorites list. To me, that movie was
          not just a bad StarWars movie, It was the worst movie I had ever seen
          in my entire life. Never had a Movie ruin so many childhood characters
          and franchise. This movie made the origional Trilogy not matter, and
          for that I can't ignore it and StarWars was removed from my favoite
          movies list.
        </div>
        <div className='question'>Why the Pricness Bride?</div>
        <div className='answer'>
          This movie was always a GoTo movie for me, when I was sick or bored
          all growing up. In High-School I read the book for an english class
          and began learning more and more about it. To this day this is the
          only movie I've seen that continues to be entertaining and gets better
          the more you think about it, the more you watch it. It's the only
          near-perfect movie I've seen and likely will ever see.
        </div>
        <div className='question'>Do you have a favorite Genre?</div>
        <div className='answer'>
          No, I can equally enjoy documentaries, comedies, Rom-Coms, Musicals,
          etc... I believe there are good and bad in every Genre. Like music,
          enjoy the good ones and don't watch the bad ones.
        </div>
        <div className='question'>Do you have a least favorite Movie?</div>
        <div className='answer'>
          Yes, while there are many movies nothing is as bad as StarWars: The
          Last Jedi.
        </div>
        <div className='question'>What about Actors?</div>
        <div className='answer'>
          There are many great actors, I don't believe any one actor will make
          or break a movie. They all have good and bad. My favoite is probably
          Heath Ledger, though I also enjoy many others. Like my favorites my
          least favorites still have enjoyable movies, generally speaking though
          I don't generally enjoy Jim Carry, Adam Sandler, or Will Ferrell
          movies.
        </div>
      </div>
    </div>
  );
};

export default Movies;
