/** @format */

'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import footer from '../../../public/images/footer.jpg';
const PersonalSession = () => {
  return (
    <div className='px-4 py-16 bg-black text-white'>
      <div className='max-w-7xl mx-auto '>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          {/* Left Section - Description */}
          <div className='lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0'>
            <h2 className='text-3xl font-bold mb-4'>
              Interested in the 6-Day{' '}
              <b className='text-[#FFCB12]'>
                Sampoorna Samkalpa Siddhi Maha Yagna?
              </b>
            </h2>
            <p className='text-lg mb-4'>
              <b className='text-[#FFCB12]'>Pujya Gurudev Sri Sadamala Nanda</b>{' '}
              will personally connect with each couple to guide them through the
              entire process of the Maha Yagna. This exclusive one-on-one
              session will ensure that you are spiritually prepared and fully
              immersed in the sacred rituals.
            </p>
            <p className='text-lg '>
              <b className='text-[#FFCB12]'>Book your personal session </b>today
              to receive detailed guidance and understand the significance of
              each pooja.
            </p>
            <Link
              href='https://api.whatsapp.com/send/?phone=917784840101&text=Know%20More'
              className='inline-block bg-gradient-to-r from-amber-500 to-orange-600 
            text-white px-10 py-4 rounded-full text-lg font-semibold 
            hover:from-amber-600 hover:to-orange-700 mt-6 
            transition-all duration-300 shadow-lg hover:shadow-xl'>
              Book your Personal Session
            </Link>
          </div>

          {/* Right Section - Contact Information */}
          <div className='lg:w-1/2 text-center lg:text-left text-white px-8 py-8 rounded-lg'>
            <Image
              src={footer}
              alt='footer'
              width={800}
              height={800}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalSession;
