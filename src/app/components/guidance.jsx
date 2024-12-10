/** @format */

'use client';
import React from 'react';
import Link from 'next/link';
import { Shield, Sparkles, Sunrise } from 'lucide-react';

const GuidanceSection = () => {
  const journeySteps = [
    {
      icon: Shield,
      title: 'Consecrate Your Being and Space',
      description:
        'Infuse your life, home, and surroundings with the protective and nurturing embrace of the Devi.',
      color: 'bg-blue-50',
      iconColor: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Sparkles,
      title: 'Awaken Spiritual Energies',
      description:
        'Align with the vibrations of Sri Vidya, empowering you to overcome obstacles, attract abundance, and achieve harmony.',
      color: 'bg-purple-50',
      iconColor: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Sunrise,
      title: 'Elevate Your Journey',
      description:
        'Access ancient Vedic rituals that uplift your consciousness and bring you closer to the divine.',
      color: 'bg-amber-50',
      iconColor: 'bg-amber-100 text-amber-600',
    },
  ];

  return (
    <div className='bg-[#FFEAB6] py-12 text-white'>
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Left Column: Heading and Description */}
          <div className='space-y-6'>
            <h2 className='text-4xl font-bold text-gray-800'>
              Sacred Journey of Spiritual Transformation
            </h2>
            <p className='text-xl text-gray-600 leading-relaxed'>
              Embark on a profound spiritual path guided by ancient wisdom and
              divine grace. This transformative journey is designed to awaken
              your inner potential, align your energy, and connect you with the
              higher realms of consciousness.
            </p>
            <p className='text-lg text-[#500104] italic'>
              &quot;True spiritual growth begins when you open your heart to the
              divine guidance that has always been within and around you.&quot;
            </p>
            <Link
              href='https://api.whatsapp.com/send/?phone=917784840101&text=Know%20More'
              className='inline-block bg-gradient-to-r from-amber-500 to-orange-600 
            text-white px-10 py-4 rounded-full text-lg font-semibold 
            hover:from-amber-600 hover:to-orange-700 
            transition-all duration-300 shadow-lg hover:shadow-xl'>
              Begin Your Spiritual Journey
            </Link>
          </div>

          {/* Right Column: Journey Steps */}
          <div className='space-y-6'>
            {journeySteps.map((step, index) => {
              const IconComponent = step.icon;

              return (
                <div
                  key={index}
                  className={`
                  rounded-2xl p-6 transform transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl ${step.color}
                  border border-opacity-50 border-gray-200 flex items-center space-x-6
                `}>
                  <div
                    className={`
                  w-20 h-20 flex-shrink-0 rounded-full flex items-center 
                  justify-center ${step.iconColor}
                `}>
                    <IconComponent size={40} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className='text-2xl font-semibold mb-3 text-gray-800'>
                      {step.title}
                    </h3>

                    <p className='text-gray-600'>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidanceSection;
