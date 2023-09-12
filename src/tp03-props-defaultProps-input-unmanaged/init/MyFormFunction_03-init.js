import { useState } from "react";

let count = 0;

/**
 * This example test the props types.
 * <MyFormFunction_01 stringAttr="33" integerAttr={33}/>
 */
export function MyFormFunction_03_init(props) {
  console.log("REFRESH MyFormFunction_01", count++);

  console.log("integerAttr", props.integerAttr, typeof props.integerAttr);
  console.log("stringAttr", props.stringAttr, typeof props.stringAttr);

  // Changing a prop will crash!
  // props.stringAttr = 'pipoChange';

  return (
    <div>
      <form noValidate autoComplete="off">
        <label htmlFor="name">Name:</label>
        <input id="name" type="number" />
        <button>{props.buttonTitle}</button>
      </form>
    </div>
  );
}

/**
 * This example test the props types.
 * <MyFormFunction_01 stringAttr="33" integerAttr={33}/>
 */
export function MyFormFunction_03_step1(props) {
  console.log("REFRESH MyFormFunction_01", count++);

  console.log("integerAttr", props.integerAttr, typeof props.integerAttr);
  console.log("stringAttr", props.stringAttr, typeof props.stringAttr);

  // Changing a prop will crash!
  // props.stringAttr = 'pipoChange';

  return (
    <div>
      <form noValidate autoComplete="off">
        <label htmlFor="name">Name:</label>
        <input id="name" type="number" />
        <button
          onClick={() => {
            console.log("i have been hit");
          }}
        >
          {props.buttonTitle}
        </button>
      </form>
    </div>
  );
}

/**
 * This example test the props types.
 * <MyFormFunction_01 stringAttr="33" integerAttr={33}/>
 */
export function MyFormFunction_03_step2(props) {
  console.log("REFRESH MyFormFunction_01", count++);

  console.log("integerAttr", props.integerAttr, typeof props.integerAttr);
  console.log("stringAttr", props.stringAttr, typeof props.stringAttr);

  // Changing a prop will crash!
  // props.stringAttr = 'pipoChange';

  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="name">Name:</label>
        <input id="name" type="number" />
        <button
          onClick={() => {
            console.log("i have been hit");
          }}
        >
          {props.buttonTitle}
        </button>
      </form>
    </div>
  );
}

/**
 * This example test the props types.
 * <MyFormFunction_01 stringAttr="33" integerAttr={33}/>
 */
export function MyFormFunction_03_step3(props) {
  console.log("REFRESH MyFormFunction_01", count++);

  console.log("integerAttr", props.integerAttr, typeof props.integerAttr);
  console.log("stringAttr", props.stringAttr, typeof props.stringAttr);
  let name = 0;

  // Changing a prop will crash!
  // props.stringAttr = 'pipoChange';

  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="number"
          onChange={(e) => {
            console.log(e.target.value);
            name = e.target.value;
          }}
        />
        <button
          onClick={() => {
            console.log("i have been hit value : ", name);
          }}
        >
          {props.buttonTitle}
        </button>
      </form>
    </div>
  );
}

/**
 * This example test the props types.
 * <MyFormFunction_01 stringAttr="33" integerAttr={33}/>
 */
export function MyFormFunction_03_step4(props) {
  console.log("REFRESH MyFormFunction_01", count++);

  console.log("integerAttr", props.integerAttr, typeof props.integerAttr);
  console.log("stringAttr", props.stringAttr, typeof props.stringAttr);
  let name;

  // Changing a prop will crash!
  // props.stringAttr = 'pipoChange';

  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="number"
          onChange={(e) => {
            console.log(e.target.value);
            name = e.target.value;
          }}
        />
        <div>VALUE from Input Name : {name ? name : "empty"}</div>
        <button
          onClick={() => {
            console.log("i have been hit value : ", name);
          }}
        >
          {props.buttonTitle}
        </button>
      </form>
    </div>
  );
}

/**
 * This example test the props types.
 * <MyFormFunction_01 stringAttr="33" integerAttr={33}/>
 */
export function MyFormFunction_03_step5(props) {
  console.log("REFRESH MyFormFunction_01", count++);

  console.log("integerAttr", props.integerAttr, typeof props.integerAttr);
  console.log("stringAttr", props.stringAttr, typeof props.stringAttr);
  let name;

  // Changing a prop will crash!
  // props.stringAttr = 'pipoChange';

  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="number"
          onChange={(e) => {
            console.log(e.target.value);
            name = e.target.value;
          }}
        />
        <div>VALUE from Input Name : {name ? name : "empty"}</div>
        <button
          onClick={() => {
            console.log("i have been hit value : ", name);
          }}
        >
          {props.buttonTitle}
        </button>
      </form>
      <MyChildFunction name={name} />
    </div>
  );
}

export const MyChildFunction = (props) => {
  return (
    <div>
      <div>VALUE in CHILD from Input Name : {props.name}</div>
    </div>
  );
};

/**
 * This example test the props types.
 * <MyFormFunction_01 stringAttr="33" integerAttr={33}/>
 */
export function MyFormFunction_03_step6(props) {
  const [name, setName] = useState(0);

  // Changing a prop will crash!
  // props.stringAttr = 'pipoChange';

  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="number"
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
          }}
        />
        <div>VALUE from Input Name : {name ? name : "empty"}</div>
        <button
          onClick={() => {
            setName((name) => name + 1);
          }}
        >
          click me
        </button>
        <button
          onClick={() => {
            setName(0);
          }}
        >
          reset
        </button>
      </form>
      <MyChildFunction name={name} />
    </div>
  );
}

//create a componnet list where the user can add and remove items
export function MyFormFunction_03_step7(props) {
  const [liste, setListe] = useState([]);
  const [name, setName] = useState(0);

  return (
    <div>
      <form noValidate autoComplete="off">
        <label htmlFor="name">New item:</label>
        <input
          id="name"
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
          }}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            setListe((liste) => [...liste, name]);
          }}
        >
          add
        </button>
      </form>

      <div>
        <ul>
          {liste.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/*************Version à plusieur composant  */

export function MyFormFunction_03_step8(props) {
  const [liste, setListe] = useState([]);
  const [name, setName] = useState(0);

  const addItemToList = () => {
    setListe((liste) => [...liste, name]);
  };

  const resetItemList = () => {
    setListe([]);
  };

  return (
    <div>
      <InputSection setName={setName} />
      <ButtonSection
        addItemToList={addItemToList}
        resetItemList={resetItemList}
      />
      <ListSection liste={liste} />
    </div>
  );
}

export function InputSection(props) {
  return (
    <div>
      <label htmlFor="name">New item:</label>
      <input
        id="name"
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          props.setName(e.target.value);
        }}
      ></input>
    </div>
  );
}

export function ButtonSection(props) {
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.addItemToList();
        }}
      >
        add
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.resetItemList();
        }}
      >
        reset
      </button>
    </div>
  );
}

export function ListSection(props) {
  return (
    <div>
      <ul>
        {props.liste.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/********************************************* */
