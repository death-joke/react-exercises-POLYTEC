import React, {useState} from 'react';

/**
 * useEffect was NOT needed in this case.
 */
export default function SimpleNoUseEffect02() {

    const [count, setCount] = useState(1);

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

