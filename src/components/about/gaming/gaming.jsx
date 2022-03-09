import React from 'react';

const Gaming = () => {
  return (
    <div className='about-container'>
      <div className='sidename'>
        <div className='sidename-title'>Gaming</div>
      </div>
      <div className='content'>
        <div className='question'>What is your favorite games?</div>
        <div className='answer'>
          <ol>
            <li>Bloodborne</li>
            <li>Horizon Zero Dawn</li>
            <li>Knights of the Old Republic</li>
            <li>Zelda Breath of the Wild</li>
            <li>Zelda Ocarina of Time</li>
          </ol>
        </div>
        <div className='question'>Why is bloodborne your favorite game?</div>
        <div className='answer'>
          Never have I ever been haunted by a game I didn't play. I bought this
          game when it first came out in 2015. I played it and could not, for
          the life of me, get past the 2nd boss Father Gascoigne. For years I
          kept going back to play this game because the atmosphere was so
          inticing. This game stuck in my head so much until in 2018 after my
          first semster of college I finally played it continously to get past
          this part and beat the game! I have played through the story multiple
          times sense and as of right now is the only game I have 100%
          completed. The feeling when finally beating a boss was an addictive
          feeling. Never before had I played a game with such interesting lore,
          story-telling methods, and atmosphere.
        </div>
        <div className='question'>What consoles do you have?</div>
        <div className='answer'>
          <ul>
            <li>Nintendo 64</li>
            <li>Nintendo Switch</li>
            <li>Xbox OG</li>
            <li>Xbox 360</li>
            <li>PS2</li>
            <li>PS3</li>
            <li>
              PS4 Pro
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                />
              </svg>
            </li>
            <li>PS5</li>
            <li>PC</li>
          </ul>
        </div>
        <div className='question'>
          Why don't you have an Xbox One or Series X?
        </div>
        <div className='answer'>
          I did, but once I was finally able to get a good GPU for my PC I no
          longer used the Xbox's. I sold them because through gamepass and steam
          just about every game is playable on pc
        </div>
        <div className='question'>Other loved games?</div>
        <div className='answer'>
          Assasins Creed: Black Flag, Halo Reach, Age of empires 2, Skyrim,
          Battle for Middle Earth 2, Ghost of Tsushima, Portal, Portal 2,
          Spider-Man(ps4), Forza, Vanishing of Ethan Carter, Lego starwars,
          Republic Commando, Spliter Cell: Chaos Theory
        </div>
      </div>
    </div>
  );
};

export default Gaming;
