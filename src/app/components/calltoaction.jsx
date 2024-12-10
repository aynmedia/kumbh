/** @format */

import Link from 'next/link';
import React from 'react';

const Calltoaction = () => {
  return (
    <div className='bg-gradient-to-b from-black to-[#500104] flex flex-col  items-center justify-center'>
      <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8'>
        <h1 className='text-3xl md:text-5xl font-bold text-left text-white mb-12'>
          Participant’s Experience
        </h1>
      </div>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8'>
        <div className='bg-[#5E1518] shadow-md rounded-lg p-10 flex-1'>
          <p className='text-md text-white'>
            We came to the{' '}
            <strong className='text-[#FFCB12]'>
              Sri Chakra Navaavarna Puja{' '}
            </strong>
            seeking blessings for clarity and harmony in our lives. What we
            experienced was far beyond our imagination. The divine vibrations of
            the <strong className='text-[#FFCB12]'>Maha Sri Chakra </strong>
            awakened a profound sense of oneness within us. Our relationship has
            transformed with greater understanding, love, and joy. Devi’s grace
            now guides every aspect of our journey.
          </p>
          <p className='text-lg font-semibold my-6 text-white'>
            Ravi & Meena Sharma 
          </p>
          <p className='text-md  text-[#FFCB12]'>Entrepreneurs, Mumbai </p>
        </div>
        <div className='bg-[#5E1518] shadow-md rounded-lg p-10 flex-1 gap-10 md:mt-8'>
          <p className='text-md text-white'>
            Attending the{' '}
            <strong className='text-[#FFCB12]'>
              Sri Chakra Navaavarna Puja{' '}
            </strong>
            has been a life-changing experience for us. The energy, the prayers,
            and the divine presence have brought us unimaginable joy and harmony
            in our relationship. We’ve found a deeper connection with each other
            and the universe. It’s an experience we cherish deeply, and we truly
            feel blessed to have been part of this sacred event.
          </p>
          <p className='text-lg font-semibold my-6 text-white'>
            Anil & Sunita Sharma 
          </p>
          <p className='text-md  text-[#FFCB12]'>Bangalore, India   </p>
        </div>
      </div>
      <span className='text-white my-12'>
        To Know More{' '}
        <Link
          href='https://api.whatsapp.com/send/?phone=917784840101&text=Know%20More'
          className='text-[#FFCB12]'>
          Click Here
        </Link>
         
      </span>
    </div>
  );
};

export default Calltoaction;
