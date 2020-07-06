import React from 'react';
import { Button } from 'react-bootstrap';

interface CounterProps {
  initialNumber: number;
}

export const Counter: React.FC<CounterProps> = ({ initialNumber }) => {
  const [count, setCount] = React.useState(initialNumber);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
};
