let count = 0;

/**
 * This example test the props types.
 * <MyFormFunction_01 stringAttr="33" integerAttr={33}/>
 */
export function MyFormFunction_03_init(props) {

    console.log('REFRESH MyFormFunction_01', count++);

    console.log('integerAttr', props.integerAttr, typeof props.integerAttr);
    console.log('stringAttr', props.stringAttr, typeof props.stringAttr);


    // Changing a prop will crash!
    // props.stringAttr = 'pipoChange';

    return (
      <div>
          <form noValidate autoComplete="off">
              <label htmlFor="name">Name:</label>
              <input id="name" type="number"/>
              <button>OK</button>
          </form>
      </div>
    );
}
