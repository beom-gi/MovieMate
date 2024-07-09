import React, {useState} from 'react';

const MovieList = (props) => {
    const [count, setCount] = useState(0);
    const handleCountUpdate = () => {
        setCount(count + 1);
    };


  return (
    <div>
      <button onClick={handleCountUpdate}>{count}</button>
    </div>
  );
};

export default MovieList;