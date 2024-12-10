/** @format */

'use client';
import Image from 'next/image';
import React from 'react';
import blessingsImg from '../../../public/images/blessings.jpg';
import pujaImg from '../../../public/images/pujaImg.jpg';
import transform from '../../../public/images/transform.jpg';

const ProgramDetails = () => {
  const features = [
    {
      title: 'Personalized Blessings',
      description:
        'Receive personalized blessings and guidance from Gurudev, ensuring a profound spiritual connection.',
      image: blessingsImg,
      alt: 'Spiritual Blessings',
    },
    {
      title: 'Sri Chakra Navaavarna Puja',
      description:
        'Participate in the powerful Sri Chakra Navaavarna Puja and Yagna, awakening divine energies within and around you.',
      image: pujaImg,
      alt: 'Sri Chakra Navaavarna Puja',
    },
    {
      title: 'Life Transformation',
      description:
        'Transform your life by invoking the grace of Sri Lalita Maha Tripura Sundari Matha for protection, prosperity, and spiritual liberation.',
      image: transform,
      alt: 'Spiritual Transformation',
    },
  ];

  return (
    <div className='bg-[#500104] py-12 text-white'>
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <h2 className='text-4xl font-bold text-center mb-12'>
          6-Day Sampoorna Samkalpa Siddhi Maha Yagna
          <br />
          <span className='text-2xl block mt-2'>
            with Pujya Gurudev Sri Sadamala Nanda 
          </span>
        </h2>

        <p className='text-xl text-center mb-16 max-w-4xl mx-auto'>
          Immerse yourself in the divine grace of{' '}
          <b className='text-[#FFCB12]'>Sri Lalita Maha Tripura Sundari Mata</b>{' '}
          through the transformative{' '}
          <b className='text-[#FFCB12]'>
            6-Day Sampoorna Samkalpa Siddhi Maha Yagna
          </b>
          , guided by the revered{' '}
          <b className='text-[#FFCB12]'>Pujya Gurudev Sri Sadamala Nanda </b>, a
          beacon of <b className='text-[#FFCB12]'>Sri Vidya Upasana</b> and a
          renowned spiritual leader.
        </p>

        <div className='grid md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl'>
              <div className='relative h-64 w-full'>
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  layout='fill'
                  objectFit='cover'
                  className='transition-transform duration-300 hover:scale-110'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-semibold mb-4 text-black'>
                  {feature.title}
                </h3>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
