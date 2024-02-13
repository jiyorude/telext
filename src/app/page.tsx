'use client';
import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { places } from '@/api/places';

const WorldClock: React.FC = () => {
  const [timezones, setTimezones] = useState<{ [key: string]: string }>({});
  const [currentTime, setCurrentTime] = useState(() => moment().tz('Europe/Amsterdam').format("HH:mm:ss"));
  const [currentDate] = useState(() => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'short' });
    const year = now.getFullYear();
    return `${day} ${month} ${year}`;
  });

  useEffect(() => {
    setCurrentTime(moment().tz('Europe/Amsterdam').format("HH:mm:ss"));
    const interval = setInterval(() => {
      setCurrentTime(moment().tz('Europe/Amsterdam').format("HH:mm:ss")); 
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateTimes = () => {
      const newCityTimes = places.reduce((acc, { city, timezone }) => {
        acc[city] = moment().tz(timezone).format("HH:mm");
        return acc;
      }, {} as { [key: string]: string });

      setTimezones(newCityTimes);
    };
    updateTimes(); 
    const interval = setInterval(updateTimes, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='bg-black select-none flex flex-col items-center h-dvh lg:h-screen w-screen overflow-hidden'>
      <header className='container '>
        <section className='py-4 px-8 flex items-center justify-between text-2xl'>
          <span className='mxTxtWhite'>P694</span>
          <span className='mxTxtWhite'>APPOV</span>
          <span className='mxTxtWhite pr-72'>694</span>
          <span className='mxTxtWhite'>{currentDate}</span>
          <span className='mxTxtLightBlue' suppressHydrationWarning={true}>{currentTime}</span>
        </section>
        <section className='h-32 bg-telexBlue flex items-center justify-center'>
          <h1 className='mxTxtYellow text-8xl px-16 flex justify-around w-full'>
            {'WORLDCLOCK'.split('').map((char, index) =>
            char === ' ' ? <span key={index}>&nbsp;</span> : <span key={index}>{char}</span>
            )}
          </h1>
        </section>
      </header>
      <main className='container border pt-4 pb-2 border-white grid grid-cols-2'>
        {Object.entries(timezones).map(([city, time]) => (
            <div key={city} className='text-lg mxTxtWhite flex justify-between px-28'>
              <span>{city}</span>
              <span className='mxTxtLightBlue'>{time}</span>
            </div>
          ))}
      </main>
      <footer className='container border border-white'>
        <section className='stripe'></section>
      </footer>
    </section>
  );
};

export default WorldClock;
