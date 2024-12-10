/** @format */

import React from 'react';

const Button = ({ link, children }) => {
  return (
    <a
      href={link}
      className='bg-[#FFCB12] hover:bg-amber-400 text-black font-bold py-4 px-4 rounded'
      style={{ width: 'fit-content' }}>
      {children}
    </a>
  );
};

export default Button;
