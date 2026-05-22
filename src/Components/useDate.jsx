import { useState, useEffect } from "react";

export default function useDate() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return {
    date: currentTime.toLocaleDateString(),
    time: currentTime.toLocaleTimeString(),
    full: currentTime.toLocaleString(),
  };
}
