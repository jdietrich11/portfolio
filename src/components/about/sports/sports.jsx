import React from 'react';

const Sports = () => {
  return (
    <div className='about-container'>
      <div className='sidename'>
        <div className='sidename-title'>Sports</div>
      </div>
      <div className='content'>
        <div className='question'>What sports?</div>
        <div className='answer'>
          <ul>
            <li>Basketball</li>
            <li>Football</li>
            <li>Golf</li>
          </ul>
        </div>
        <div className='question'>
          Did you ever play any sports competitively?
        </div>
        <div className='answer'>
          Aside from intramural Basketball not in college. In High School I was
          a QB on the football team until I tore my ACL. I tried out for the
          Basktball team but did not make it? Until recently, my Dad and I would
          enter the Bluffdale City golf tournament each year.
        </div>
        <div className='question'>Do you play any other sports?</div>
        <div className='answer'>
          I don't get alot of opportunites to play many other sports but I'm
          always up for it.
        </div>
        <div className='question'>Are there any sports you do NOT like?</div>
        <div className='answer'>
          Baseball, though it has nothing to do with the sport itself and has
          more to do with the people who I grew up with who did play baseball.
        </div>
      </div>
    </div>
  );
};

export default Sports;
