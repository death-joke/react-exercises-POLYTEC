import React, {useEffect, useState} from 'react';

export function CounterEffectWithInterval(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((c) => c + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <div className="container"><span>{count}</span></div>;
}
