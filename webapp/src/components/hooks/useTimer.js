import {useState, useEffect} from 'react';

export const useTimer = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [counter]);

  return [counter];
};
