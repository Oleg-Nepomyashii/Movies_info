import React from 'react';
import { useSelector } from 'react-redux'; 

export const App = () => {
  const message = useSelector((state) => state)
  console.log(message)
  return (
    <div>
      hello
    </div>
  );
}
