/** @format */

'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import guru from '../../../public/images/guru.png';
const SpiritualJourney = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = {
    overview: {
      title:
        'Exclusive to 108 Couples: A Once-in-a-Lifetime Spiritual Opportunity',
      description:
        'This sacred journey is your gateway to connect directly with the divine energy of Sri Lalita Maha Tripura Sundari Mata, available only during the Kumbh Mela 2025.',
      highlights: [
        'Happens Once Every 12 Years: A rare alignment of spiritual power and divine blessings',
        'First-Come, First-Serve: Only 108 exclusive spots available',
        'Unmatched Spiritual Significance: Amplifies blessings manifold',
        'Exclusive Divine Connection: Personal guidance from Pujya Gurudev Sri Sadamala Nanda',
        'Be a Part of History: One of the most significant spiritual events of Kumbh 2025',
      ],
    },
    benefits: [
      {
        title: 'Removal of Obstacles and Negative Influences',
        key: 'obstacles',
        details: [
          'Cleansing Negative Karma: Dissolve past karmic burdens',
          'Shield Against Negativity: Invoke protective divine grace',
          "Unblocking Life's Pathways: Break through barriers",
          'Healing and Renewal: Purify soul and environment',
        ],
      },
      {
        title: 'Protection from Misfortunes',
        key: 'protection',
        details: [
          'Divine Healing Energy: Cleanse physical and spiritual impurities',
          'Guarding Against Misfortunes: Receive a divine shield',
          'Eradication of Negative Energies: Neutralize harmful influences',
          'Strengthening Spiritual Immunity: Fortify resilience',
        ],
      },
      {
        title: 'Prosperity and Harmonious Relationships',
        key: 'prosperity',
        details: [
          'Attracting Wealth and Abundance: Remove financial hurdles',
          'Fostering Fame and Recognition: Enhance social standing',
          'Strengthening Relationships: Purify negative emotions',
          'Divine Blessings for Long-Term Growth: Ensure sustainable progress',
        ],
      },
      {
        title: 'Spiritual Growth and Liberation',
        key: 'liberation',
        details: [
          'Clearing Karmic Imprints: Cleanse accumulated negative karma',
          'Alignment with Divine Will: Guide towards righteousness',
          'Inner Peace and Harmony: Transcend worldly distractions',
          'Liberation (Moksha): Accelerate spiritual journey',
        ],
      },
    ],
  };

  const inclusions = [
    {
      title: 'Luxurious Stay',
      description: 'Premium cottages with all modern amenities.',
      icon: '/images/luxury-stay.png',
      included: true,
    },
    {
      title: 'Personalized Rituals',
      description: 'Exclusive kits and dedicated assistance for each couple.',
      icon: '/images/personalized-rituals.png',
      included: true,
    },
    {
      title: 'Gourmet Satvik Meals',
      description: 'Healthy, spiritual meals prepared with devotion.',
      icon: '/images/satvik-meals.png',
      included: true,
    },
    {
      title: 'Priority Access',
      description: 'Reserved seating and premium access to all ceremonies.',
      icon: '/images/priority-access.png',
      included: true,
    },
    {
      title: 'Direct Blessings',
      description:
        'One-on-one darshan and blessings from Pujya Gurudev Sri Sarvananda Nada.',
      icon: '/images/direct-blessings.png',
      included: true,
    },
    {
      title: 'Commemorative Mementos',
      description: 'A divine keepsake symbolizing your participation.',
      icon: '/images/mementos.png',
      included: true,
    },
  ];

  return (
    <div className=' mx-auto px-4 py-16 '>
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-3xl font-bold mb-6'>Why Participate? </h1>
          <p className='text-xl text-gray-700 max-w-4xl mx-auto'>
            A transformative spiritual journey during{' '}
            <b className='text-[#500104]'>
              Kumbh Mela 2025, exclusively for 108 blessed couples
            </b>{' '}
            performed by{' '}
            <b className='text-[#500104]'>Pujya Gurudev Sri Sadamala Nanda.</b>
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 mb-16'>
          <div className='relative w-full flex justify-center'>
            <h1 className='absolute top-0 left-0 text-2xl font-bold text-white flex justify-center my-12 mx-24 flex-wrap text-center'>
              Pujya Gurudev Sri Sadamala Nanda
            </h1>
            <Image
              src={guru}
              alt='Spiritual Ritual'
              width={500}
              height={400}
              className='rounded-xl shadow-2xl'
            />
          </div>
          <div>
            <h2 className='text-2xl font-bold mb-6 '>
              {sections.overview.title}
            </h2>
            <p className='text-lg text-gray-700 mb-6'>
              {sections.overview.description}
            </p>
            <ul className='space-y-3'>
              {sections.overview.highlights.map((highlight, index) => (
                <li key={index} className='flex items-start'>
                  <svg
                    className='w-6 h-6 text-amber-500 mr-3 flex-shrink-0'
                    fill='currentColor'
                    viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-gray-700'>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-center mb-12 '>
            Transformative Benefits
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {sections.benefits.map((benefit, index) => (
              <div
                key={index}
                className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all'>
                <h3 className='text-lg font-bold mb-4 '>{benefit.title}</h3>
                <ul className='space-y-2'>
                  {benefit.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className='flex items-start text-gray-700'>
                      <svg
                        className='w-5 h-5 text-amber-500 mr-2 mt-1 flex-shrink-0'
                        fill='currentColor'
                        viewBox='0 0 20 20'>
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-center mb-12 '>
            What's Included
          </h2>
          <div className='overflow-x-auto'>
            <table className='min-w-full bg-white shadow-lg rounded-lg border border-gray-200'>
              <thead>
                <tr className='bg-gray-100 text-gray-700 text-left'>
                  <th className='py-4 px-6 font-semibold'>Feature</th>
                  <th className='py-4 px-6 font-semibold'>Description</th>
                  <th className='py-4 px-6 font-semibold text-center'>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {inclusions.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}>
                    <td className='py-4 px-6 font-medium text-gray-800'>
                      {item.title}
                    </td>
                    <td className='py-4 px-6 text-gray-600'>
                      {item.description}
                    </td>
                    <td className='py-4 px-6 text-center'>
                      {item.included ? (
                        <span className='text-green-500 font-bold text-lg'>
                          ✔
                        </span>
                      ) : (
                        <span className='text-red-500 font-bold text-lg'>
                          ✘
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className='text-center'>
          <p className='text-2xl font-semibold text-amber-600 mb-6'>
            Ritual Fee: ₹1,47,000
          </p>
          <Link
            href='https://api.whatsapp.com/send/?phone=917784840101&text=Know%20More'
            className='inline-block bg-gradient-to-r from-amber-500 to-orange-600 
            text-white px-12 py-4 rounded-full text-xl font-semibold 
            hover:from-amber-600 hover:to-orange-700 
            transition-all duration-300 shadow-xl hover:shadow-2xl'>
            Secure Your Spiritual Journey Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpiritualJourney;
