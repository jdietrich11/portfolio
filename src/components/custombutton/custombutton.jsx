import React from 'react';

import './custombutton.styles.scss';

const CustomButton = (data) => {
  console.log(data);
  return (
    <>
      <button className='button'>{data.data}</button>
    </>
  );
};

export default CustomButton;
