'use client';
import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { places } from '@/api/places';

const WorldClock: React.FC = () => {
  const [timezones, setTimezones] = useState<{ [key: string]: string }>({});
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const [currentDate] = useState(() => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'short' });
    const year = now.getFullYear();
    return `${day} ${month} ${year}`;
  });

  useEffect(() => {
    setCurrentTime(moment.tz('Europe/Amsterdam').format("HH:mm:ss"));
    const interval = setInterval(() => {
      setCurrentTime(moment.tz('Europe/Amsterdam').format("HH:mm:ss"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateTimes = () => {
      const currTime = places.reduce((acc, { city, timezone }) => {
        acc[city] = moment.tz(timezone).format("HH:mm");
        return acc;
      }, {} as { [key: string]: string });
      setTimezones(currTime);
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!currentTime) {
    return <div className='w-screen h-dvh bg-black lg:h-screen flex justify-center items-center text-2xl mxTxtLightBlue'>Loading...</div>;
  }

  return (
    <section className='bg-black select-none flex flex-col items-center h-screen w-screen overflow-hidden'>
      <header className='container '>
        <section className='py-4 px-4 md:px-8 flex items-center justify-between text-xs md:text-lg lg:text-2xl'>
          <span className='mxTxtWhite'>P694</span>
          <span className='mxTxtWhite'>APPOV</span>
          <span className='mxTxtWhite pr-8 md:pr-36 lg:pr-72'>694</span>
          <span className='mxTxtWhite'>{currentDate}</span>
          <span className='mxTxtLightBlue' suppressHydrationWarning={true}>{currentTime}</span>
        </section>
        <section className='md:h-28 h-20 bg-telexBlue flex items-center justify-center'>
          <h1 role="button" tabIndex={0} aria-label='World Clock' className='mxTxtYellow text-[46px] md:text-[90px] lg:text-8xl px-16 flex justify-around w-full'>
            {'WorldClock'.split('').map((char, index) =>
            char === ' ' ? <span key={index}>&nbsp;</span> : <span key={index}>{char}</span>
            )}
          </h1>
        </section>
      </header>
      <main className='container pt-4 pb-6 grid grid-cols-2'>
        {Object.entries(timezones).map(([city, time]) => (
            <div key={city} className='text-[11.5px] py-1.5 md:text-lg mxTxtWhite flex justify-between px-3 md:py-0 md:px-4 lg:px-28'>
              <span role='button' className='cursor-default' tabIndex={0}>{city}</span>
              <span role='button' tabIndex={0} className='mxTxtLightBlue cursor-default' aria-live='polite'>{time}</span>
            </div>
          ))}
      </main>
      <footer className='container flex justify-center'>
        <section className='stripe w-full'>
          <section className='flex mt-2.5 p-2 justify-between gap-10 text-[10px]md:text-lg px-4'>
            <span className='mxTxtRed hover:cursor-pointer' role="button" tabIndex={0} aria-label="Button that says 'Next'">Next</span>
            <span className='mxTxtGreen hover:cursor-pointer' role="button" tabIndex={0} aria-label="Button that says 'News'">News</span>
            <span className='mxTxtYellow hover:cursor-pointer' role="button" tabIndex={0} aria-label="Button that says 'Index'">Index</span>
            <span className='mxTxtLightBlue hover:cursor-pointer' role="button" tabIndex={0} aria-label="Button that says 'Sport'">Sport</span>
          </section>
        </section>
      </footer>
    </section>
  );
};

export default WorldClock;