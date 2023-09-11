// Hook flow
// https://github.com/donavon/hook-flow
// http://localhost:3000/isolated/examples/hook-flow.js

import React from 'react';

let countChilRefresher = 1;

function Child() {
    console.log(`%c    Child: render ${countChilRefresher} start `, 'color: blue');

    const [count, setCount] = React.useState(() => {
        console.log('%c    Child: useState(() => 0)', 'color: tomato');
        return 0;
    });

    React.useEffect(() => {
        console.log('%c    Child: useEffect(() => {})', 'color: LightCoral');
        return () => {
            console.log(
              '%c    Child: useEffect(() => {}) cleanup 🧹',
              'color: LightCoral',
            );
        };
    });

    React.useEffect(() => {
        console.log(
          '%c    Child: useEffect(() => {}, [])',
          'color: MediumTurquoise',
        );
        return () => {
            console.log(
              '%c    Child: useEffect(() => {}, []) cleanup 🧹',
              'color: MediumTurquoise',
            );
        };
    }, []);

    React.useEffect(() => {
        console.log('%c    Child: useEffect(() => {}, [count])', 'color: HotPink');
        return () => {
            console.log(
              '%c    Child: useEffect(() => {}, [count]) cleanup 🧹',
              'color: HotPink',
            );
        };
    }, [count]);

    const element = (
      <>
          {console.log('%c    Child: rendering HTML JSX', 'color: blue')}
          <button onClick={() => setCount(previousCount => previousCount + 1)}>
              {count}
          </button>
      </>
    );

    console.log(`%c    Child: render ${countChilRefresher++} end `, 'color: blue');

    return element;
}

function AppDemoChildOnlyLifeCycle() {
    // console.log('%cApp: render start', 'color: blue');

    const [showChild, setShowChild] = React.useState(() => {
        // console.log('%cApp: useState(() => false)', 'color: tomato');
        return false;
    });


    const element = (
      <>
          {/*{console.log('%cApp: rendering HTML JSX', 'color: blue')}*/}
          <label>
              <input
                type="checkbox"
                checked={showChild}
                onChange={e => {
                    setShowChild(e.target.checked);
                    countChilRefresher = 1;
                }}
              />{' '}
              create/remove child
          </label>
          <div
            style={{
                padding: 10,
                margin: 10,
                height: 50,
                width: 50,
                border: 'solid',
            }}
          >
              {showChild ? <Child/> : null}
          </div>
      </>
    );

    // console.log('%cApp: render end', 'color: blue');

    return element;
}

export default AppDemoChildOnlyLifeCycle;
