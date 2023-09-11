## Exo on Props

### 1- Add prop-types

        npm i prop-types

### 2- Add eslint config

In package.json add a few lines to activate eslint

```json
{
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ],
    "env": {
      "browser": true,
      "node": true,
      "es6": true,
      "jest": true
    },
    "rules": {
      "no-debugger": "off",
      "no-console": "off",
      "no-unused-vars": "warn",
      "react/prop-types": "warn"
    }
  }
}
```

### 3- exercice

1. code a form functional component which returns the following HTML

```jsx
<div>
    <form noValidate autoComplete="off">
        <label htmlFor="name">Name:</label>
        <input id="name"/>
        <button>OK</button>
    </form>
</div>
```

2. Exo Steps

    1. pass as prop the name of the button in property 'buttonTitle' (instead of the hard-coded OK)
    2. define a default value of 'OK' for this prop.
    3. add onClick on the button and log something in the console
    4. test it (step1)
    5. Before clicking on the button you have a count=2 because in index.js Recat has executed your function TWICE
       because os StrictMode (this is normal behavior) => remove StrictMode temporarily to test without it (count = 1).
    6. When clicking on the button the form reloads, to prevent this submit, capture the onSubmit event on the &lt;form>
       and add event.preventDefault(); in the handler (step2)
    7. test (step2), that should prevent the app reload
    8. now the log you consoled should appear
    9. add an event handler on the input for onChange and log the value of that input
    10. define a local variable called name (let name;) to hold that value
    11. On the button handler, log that name value.
    12. test (step3)
    13. add this JSX code to your JSX : <div>VALUE from Input Name : {name ? name : 'empty'}</div>
    14. test it (step4) , does the name value change in HTML ?

2. BONUS : code another function MyChildFunction (FC) which receives a props called 'name' and returns the following
   HTML

```jsx
    <div>
    <div>VALUE in CHILD from Input Name : {props.name}</div>
</div>
```

and test it

## Conclusion

With our code, React never refresh the DOM !
And that is normal, we must change the state of the component to trigger a refresh of the DOM by React.
