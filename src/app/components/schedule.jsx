/** @format */

'use client';
import React from 'react';
import { Calendar, Flame, Star, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const YagnaSchedule = () => {
  const scheduleDetails = [
    {
      day: 1,
      date: 'Feb 9',
      title: 'Sri Maha Ganapati Havan',
      description:
        'The Sri Maha Ganapati Havan is a powerful Vedic ritual dedicated to Lord Ganesha, the remover of obstacles and harbinger of success. This sacred ceremony invokes divine blessings for prosperity, wisdom, and harmony in all aspects of life. Through the sacred fire offerings, devotees seek to eliminate negativity, gain clarity, and receive Ganesha’s grace. Participating in this havan ensures auspicious beginnings and smooth progress on one’s spiritual and material journeys. ',
      time: '5:00 AM - 7:30 AM',
      icon: Flame,
      color: 'border-red-500',
      textColor: 'text-red-600',
      background: 'bg-red-50',
    },
    {
      day: 2,
      date: 'Feb 10',
      title: 'Sri Varahi Havan',
      description:
        ' Sri Varahi Havan is a powerful Vedic ritual dedicated to Goddess Varahi, the divine commander of Goddess Lalita’s celestial army. This havan is performed to invoke her blessings for protection, courage, and the removal of obstacles in life. It is believed to grant spiritual strength, material prosperity, and victory over adversities. Participating in this sacred ritual fosters a sense of empowerment and divine grace. ',
      time: '6:00 AM - 8:30 AM',
      icon: Flame,
      color: 'border-orange-500',
      textColor: 'text-orange-600',
      background: 'bg-orange-50',
    },
    {
      day: 3,
      date: 'Feb 11',
      title: 'Sri Rajashyamala Havan',
      description:
        'Sri Rajashyamala Havan is a sacred fire ritual dedicated to Goddess Rajashyamala (Matangi), the epitome of wisdom, creativity, and eloquence. This havan is performed to seek her blessings for enhanced intellect, artistic skills, and mastery in communication. It is believed to remove negativity, attract prosperity, and grant success in endeavors. Participating in this pooja fosters clarity of thought and aligns devotees with divine knowledge and inspiration. ',
      time: '5:30 AM - 8:00 AM',
      icon: Flame,
      color: 'border-yellow-500',
      textColor: 'text-yellow-600',
      background: 'bg-yellow-50',
    },
    {
      day: 4,
      date: 'Feb 12',
      title: 'Magha Poornami Special – Sri Chakra Navaavarna Puja',
      description:
        'Featuring a 108-feet Maha Sri Chakra, illustrated with vibrant colors and performed by 108 married couples. Sri Chakra Navaavarna Puja is a profound and intricate ritual dedicated to Sri Lalita Maha Tripura Sundari, performed within the sacred geometry of the Sri Chakra. This puja involves worshipping the nine enclosures (Nava Avaranas) of the Sri Chakra, each representing a unique aspect of the divine. It is believed to grant spiritual liberation, prosperity, and the fulfillment of desires. Participating in this ritual invokes the supreme blessings of the Goddess, harmonizing the devotee with universal energy. ',
      time: '4:30 AM - 9:00 AM',
      icon: Star,
      color: 'border-green-500',
      textColor: 'text-green-600',
      background: 'bg-green-50',
    },
    {
      day: 5,
      date: 'Feb 13',
      title: 'Sri Chakra Navaavarna Yagna & Poornahuti',
      description:
        'Sri Chakra Navaavarna Yagna & Poornahuti is a sacred fire ritual performed within the framework of the Sri Chakra, dedicated to Sri Lalita Maha Tripura Sundari. This yagna involves invoking and worshipping the nine layers (Nava Avaranas) of the Sri Chakra through mantras and offerings, symbolizing the journey to the divine core. The ritual concludes with Poornahuti, a grand final offering symbolizing the surrender of all efforts to the Goddess. It is believed to bestow spiritual elevation, prosperity, and the fulfillment of life’s highest aspirations. ',
      time: '5:00 AM - 8:30 AM',
      icon: Flame,
      color: 'border-blue-500',
      textColor: 'text-blue-600',
      background: 'bg-blue-50',
    },
    {
      day: 6,
      date: 'Feb 14',
      title:
        'Sri Lalita Maha Tripura Sundari Matha Shobha Yatra & Moorthy Nimmajana',
      description:
        'Sri Lalita Maha Tripura Sundari Matha Shobha Yatra & Moorthy Nimmajana is a grand ceremonial procession honoring Sri Lalita Maha Tripura Sundari Matha. The Shobha Yatra features the beautifully adorned deity, accompanied by devotional music and vibrant celebrations, symbolizing the divine grace and glory of the Goddess. The ritual culminates with the Moorthy Nimmajana, the immersion of the deity, signifying the cycle of creation, preservation, and dissolution. This sacred event is a collective act of devotion, invoking blessings for spiritual harmony and universal well-being. ',
      time: '4:00 AM - 10:00 AM',
      icon: Star,
      color: 'border-purple-500',
      textColor: 'text-purple-600',
      background: 'bg-purple-50',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 to-white py-16'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-black mb-4'>
              6-Day Sampoorna Samkalpa Siddhi Maha Yagna
            </h1>
            <p>
              Limited to 108 Blessed Couples, this unique{' '}
              <b className='text-[#500104]'>Maha Yagna </b> is the pinnacle of
              the 33-day festival. It offers unparalleled spiritual benefits and
              immense blessings under the divine guidance of{' '}
              <b className='text-[#500104]'>
                Pujya Gurudev Sri Sarvananda Nada. 
              </b>
            </p>
            <div className='flex items-center justify-center space-x-4 text-gray-600 mt-4'>
              <Calendar size={24} />
              <span className='text-xl'>February 9-14, 2025</span>
            </div>
          </div>

          {/* Schedule Container */}
          <div className='space-y-6'>
            {scheduleDetails.map((event) => {
              const IconComponent = event.icon;
              return (
                <div
                  key={event.day}
                  className={`
                    relative border-l-8 ${event.color} 
                    bg-white rounded-r-2xl shadow-lg 
                    hover:shadow-xl transition-all duration-300
                    transform hover:-translate-x-2
                    overflow-hidden
                  `}>
                  <div
                    className='absolute top-0 right-0 w-0 h-0 
                    border-t-[50px] border-t-transparent 
                    border-r-[50px] border-r-white 
                    opacity-10'></div>

                  <div className='p-6 flex items-center'>
                    {/* Day Marker */}
                    <div
                      className={`
                      w-16 h-16 rounded-full flex flex-col 
                      items-center justify-center mr-6 
                      ${event.background} ${event.textColor}
                    `}>
                      <span className='text-2xl font-bold'>{event.day}</span>
                      <span className='text-xs'>Day</span>
                    </div>

                    {/* Event Details */}
                    <div className='flex-grow'>
                      <div className='flex justify-between items-start'>
                        <div>
                          <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                            {event.title}
                          </h3>
                          <div className='flex items-center space-x-2 text-gray-600 mb-2'>
                            <IconComponent size={20} />
                            <span className='text-sm'>{event.time}</span>
                          </div>
                        </div>
                        <span className='text-md font-bold text-gray-500'>
                          {event.date}
                        </span>
                      </div>

                      {event.description && (
                        <p className='text-sm text-gray-600 mt-2'>
                          {event.description}
                        </p>
                      )}
                    </div>

                    {/* Details Arrow */}
                    {/* <ChevronRight
                      className='ml-4 text-gray-400 group-hover:text-gray-600'
                      size={24}
                    /> */}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className='text-center mt-12'>
            <Link
              href='https://api.whatsapp.com/send/?phone=917784840101&text=Know%20More'
              className='inline-block bg-gradient-to-r from-amber-500 to-orange-600 
            text-white px-10 py-4 rounded-full text-lg font-semibold 
            hover:from-amber-600 hover:to-orange-700 
            transition-all duration-300 shadow-lg hover:shadow-xl'>
              Begin Your Spiritual Journey
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YagnaSchedule;
