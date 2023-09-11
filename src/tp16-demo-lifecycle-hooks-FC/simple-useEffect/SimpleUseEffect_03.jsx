import React, {useEffect, useState} from 'react';

// setTimeout(() => setCount(c => c + 100), 2000); // KO with StrictMode, will be executed twice
/**
 * Try removing StrictMode to see exactly what an effect is suposed to do in production.
 * ANd that is the REAL behavior!
 * Modify  src/index.js for removing/re-adding StrictMode
 */
export default function SimpleUseEffect03() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect executing');
        setTimeout(() => setCount(100), 2000); // faking an async call OK
    }, []);

    function onClick() {
        setCount(c => c + 2);
    }

    return (<div>
        {console.log('render')}
        <h2>Counter</h2>
        {count ?
          <>
              <p>Count: {count}</p>
              <button onClick={onClick}>increment +2</button>
          </>
          :
          <p>Loading ...</p>

        }
    </div>);
}

