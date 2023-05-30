import React, { useState, useEffect } from 'react';

const CounterUp = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    const increment = Math.ceil(endValue / duration);
    if (count + increment < endValue) {
      setCount(count + increment);
    } else {
      setCount(endValue);
    }
  };

  useEffect(() => {
    if (count < endValue) {
      const timer = setTimeout(incrementCount, duration);
      return () => clearTimeout(timer);
    }
  }, [count, endValue, duration]);

  return <span>{count}</span>;
};

export default CounterUp;
