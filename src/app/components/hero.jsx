/** @format */

'use client';
import Image from 'next/image';
import React from 'react';
import srividya from '../../../public/images/SRIVIDYA_LOGO_4.png';
import home from '../../../public/images/home.jpg';
import Button from './button';

const Hero = () => {
  const eventDate = new Date('2025-02-09');

  const calculateTimeLeft = React.useCallback(() => {
    const difference = +eventDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, []); // Empty dependency array since it doesn't depend on any changing values

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]); // Add calculateTimeLeft to dependencies

  const renderCountdown = () => {
    return Object.keys(timeLeft).length ? (
      <div className='grid grid-cols-4 gap-4 text-center'>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className='bg-white/20 rounded-lg p-4'>
            <div className='text-4xl font-bold'>{value}</div>
            <div className='text-sm uppercase'>{unit}</div>
          </div>
        ))}
      </div>
    ) : (
      <div className='text-2xl'>Event has started!</div>
    );
  };

  return (
    <div className='relative min-h-screen flex items-center '>
      {/* Background Image with Gradient Overlay */}
      <div className='absolute inset-0 justify-start'>
        <Image
          src={home}
          alt='Srividya Background'
          layout='fill'
          objectFit='cover'
          priority
        />
        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-black via-black to-transparent'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 text-white'>
        {/* Left Column */}
        <div className='flex flex-col space-y-6 justify-start'>
          <Image
            src={srividya}
            alt='Srividya Logo'
            width={300}
            height={300}
            priority
            className='mb-6'
          />

          <h1 className='text-3xl md:text-5xl font-bold text-left'>
            Sampoorna Samkalpa Siddi Maha Yagna
          </h1>

          <div className='space-y-4'>
            <p>
              Experience a profound transformation and invite divine energy into
              your life with the sacred{' '}
              <strong className='text-[#FFCB12]'>
                Sri Chakra Yantra Ceremony
              </strong>
              , conducted by{' '}
              <strong className='text-[#FFCB12]'>
                Pujya Gurudev Sri Sadamala Nanda{' '}
              </strong>
              during <strong className='text-[#FFCB12]'>Kumbh Mela 2025</strong>
              .
            </p>
            <p>
              This intimate in-person program offers a unique opportunity to
              connect with the supreme grace of{' '}
              <strong className='text-[#FFCB12]'>
                Sri Lalita Maha Tripura Sundari Mata
              </strong>
              , Empowering you with Spiritual growth, harmony and overall
              well-being for you and your loved ones.
            </p>
          </div>

          <div className='space-y-4'>
            <h2 className='text-sm font-bold'>
              Upcoming Programs: 9 - 14 February 2025 | Prayagraj, India
            </h2>

            <div className='mt-4'>{renderCountdown()}</div>
          </div>

          <Button link='https://api.whatsapp.com/send/?phone=917784840101&text=Know%20More'>
            Book your Participation 
          </Button>
        </div>

        {/* Right Column */}
        <div className='flex items-center justify-center'>
          {/* Empty for now, can be used for additional content */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
