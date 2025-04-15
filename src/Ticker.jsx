import React, { useEffect, useState } from 'react';

const Ticker = () => {
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('Getting location...');

  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
        timeStyle: 'medium',
      }).format(now);
      setDateTime(formatted);
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setLocation(`Lat: ${latitude.toFixed(2)}, Lng: ${longitude.toFixed(2)}`);
        },
        () => {
          setLocation('Location permission denied');
        }
      );
    } else {
      setLocation('Geolocation not supported');
    }
  }, []);

  return (
    <div className=" fixed bottom-0 w-full bg-orange-100 text-black overflow-hidden h-10 flex items-center z-50">
      <div className="animate-marquee whitespace-nowrap px-4">
        🕒 {dateTime} | 📍 {location}
      </div>
    </div>
  );
};

export default Ticker;
