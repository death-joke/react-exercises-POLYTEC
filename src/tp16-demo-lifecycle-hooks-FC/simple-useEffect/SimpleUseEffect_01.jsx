import React, {useEffect, useState} from 'react';

/**
 * Try removing StrictMode to see exactly what an effect is suposed to do in production.
 * ANd that is the REAL behavior!
 * Modify  src/index.js for removing/re-adding StrictMode
 */
export default function SimpleUseEffect01() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect executing');
        setCount(c => c + 1);
    }, []);

    function onClick() {
        setCount(c => c + 2);
    }

    return (<div>
        {console.log('render')}
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={onClick}>increment +2</button>
    </div>);
}

