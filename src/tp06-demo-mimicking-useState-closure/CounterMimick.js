import {useState} from 'react';

/**
 * useForceUpdate is using the real useState to extract only the refresh feature.
 */
function useForceUpdate() {
  const [, setPipo] = useState(Date.now());

  function forceUpdate() {
    setPipo(Date.now());
  }

  return forceUpdate;
}


const MyReact = {};
MyReact.useStateMimick = (function () {
  let data;
  let firstCall = true;

  function useStateMimick(initial) {
    const forceUpdate = useForceUpdate();
    if (firstCall) {
      data = initial;
      firstCall = false;
    }

    function setData(nextDataFn) {
      data = (typeof nextDataFn === 'function') ? nextDataFn(data) : nextDataFn;
      forceUpdate()
    }

    return [data, setData];
  }

  return useStateMimick;
})();


export function CounterMimick(props) {
// Set the initial count state to zero, 0
  const [count, setCount] = MyReact.useStateMimick(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <h5>Count is {count}</h5>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
