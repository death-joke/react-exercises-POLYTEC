/**
 * https://daveceddia.com/usestate-hook-examples/
 *
 * https://daveceddia.com/usereducer-hook-examples/
 */

import {useState} from 'react';

function useForceUpdate() {
  const [, setPipo] = useState(Date.now());

  function forceUpdate() {
    setPipo(Date.now());
  }

  return forceUpdate;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// for ListOfThingsMimickMulti to work you have to remove StrictMode in index.js !
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const MyReact = {};
MyReact.useStateMimick = (function () {
  let dataArray = [];
  let indexHook = 0;
  let firstCall = true;

  function useStateMimick(initial) {
    const forceUpdate = useForceUpdate();
    const indexMemo = indexHook;
    if (firstCall) {
      const val = (typeof initial === 'function') ? initial() : initial;
      dataArray[indexMemo] = val;
    }

    function setData(nextDataFn) {
      firstCall = false;
      const nextVal = (typeof nextDataFn === 'function') ? nextDataFn(dataArray[indexMemo]) : nextDataFn;
      dataArray[indexMemo] = nextVal;
      indexHook = 0;
      forceUpdate();
    }

    const res = [dataArray[indexMemo], setData];
    indexHook++;
    return res;
  }

  return useStateMimick;
})();


export function ListOfThingsMimickMulti() {
  const [items, setItems] = MyReact.useStateMimick([]);
  const [itemName, setItemName] = MyReact.useStateMimick('');
  console.log('items', items);
  console.log('itemName', itemName);

  const addItem = event => {
    event.preventDefault();
    setItems([...items, {id: items.length, name: itemName}]);
    setItemName('');
  };

  return (
    <>
      <form onSubmit={addItem}>
        <label>
          <input
            name="item"
            type="text"
            value={itemName}
            onChange={e => setItemName(e.target.value)}
          />
        </label>
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
