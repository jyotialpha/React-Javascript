import { useState, useEffect } from 'react';

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="flex flex-col items-end">
      <div className="text-lg font-mono font-semibold text-gray-800 dark:text-gray-200">
        {formatTime(currentTime)}
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400">
        {formatDate(currentTime)}
      </div>
    </div>
  );
};

export default Timer;
