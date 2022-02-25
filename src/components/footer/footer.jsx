import React from 'react';

import LinkData from '../../data/linkData';
import Links from '../../link/links';
import './footer.styles.scss';

class Footer extends React.Component {
  handleClick = (e) => {
    console.log(e);
  };
  render() {
    return (
      <div className='footer'>
        <div className='backTop'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 11l7-7 7 7M5 19l7-7 7 7'
            />
          </svg>
        </div>
        <div className='externalLinks'>
          <Links key={LinkData[0].name} className='links' data={LinkData[0]} />
          <Links className='links' data={LinkData[1]} />
          <Links className='links' data={LinkData[2]} />
          <Links className='links' data={LinkData[3]} />
        </div>
      </div>
    );
  }
}

// const Footer = () => {
//   return (
//     <div className='footer'>
//       <div className='backTop'>
//         <svg
//           xmlns='http://www.w3.org/2000/svg'
//           className='h-6 w-6 svg'
//           fill='none'
//           viewBox='0 0 24 24'
//           stroke='currentColor'
//         >
//           <path
//             strokeLinecap='round'
//             strokeLinejoin='round'
//             strokeWidth='2'
//             d='M5 11l7-7 7 7M5 19l7-7 7 7'
//           />
//         </svg>
//       </div>
//       <Links data={LinkData[0]} />
//       <Links data={LinkData[1]} />
//       <Links data={LinkData[2]} />
//       <Links data={LinkData[3]} />
//     </div>
//   );
// };

export default Footer;
