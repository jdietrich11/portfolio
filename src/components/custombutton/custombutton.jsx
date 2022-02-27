import React from 'react';

import './custombutton.styles.scss';

const CustomButton = (data) => {
  return (
    <>
      <button className='button'>{data.data}</button>
    </>
  );
};

export default CustomButton;
