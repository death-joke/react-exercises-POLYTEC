# useContext: simple Counter

## Background

Sharing state between components is a common problem. The best solution for this is to
📜 [lift your state](https://reactjs.org/docs/lifting-state-up.html). This requires
📜 [prop drilling](https://kentcdodds.com/blog/prop-drilling) which is not a problem, but there are some times where
prop drilling can cause a real pain.

To avoid this pain, we can insert some state into a section of our react tree, and then extract that state anywhere
within that react tree without having to explicitly pass it everywhere. This feature is called `context`. In some ways
it's like global variables, but it doesn't suffer from the same problems (and maintainability nightmares) of global
variables thanks to how the API works to make the relationships explicit.

Here's how you use context:

```javascript
import React from 'react'

const FooContext = React.createContext()

function FooDisplay() {
  const foo = React.useContext(FooContext)
  return <div>Foo is: {foo}</div>
}

ReactDOM.render(
  <FooContext.Provider value="I am foo">
    <FooDisplay/>
  </FooContext.Provider>,
  document.getElementById('root'),
)
// renders <div>Foo is: I am foo</div>
```

`<FooDisplay />` could appear anywhere in the render tree, and it will have access to the `value` which is passed by
the `FooContext.Provider` component.

Note that as a first argument to `createContext`, you can provide a default value which React will use in the event
someone calls `useContext` with your context, when no value has been provided:

```javascript
ReactDOM.render(<FooDisplay/>, document.getElementById('root'))
```

🦉 Keep in mind that while context makes sharing state easy, it's not the only solution to Prop Drilling pains and it's
not necessarily the best solution either. React's composition model is powerful and can be used to avoid issues with
prop drilling as well. Learn more about this from
[Michael Jackson on Twitter](https://twitter.com/mjackson/status/1195495535483817984)
https://www.youtube.com/watch?v=3XaXKiXtNjw

## Exercise (keeping the Container)

Create a MySubApp15 Component to define the wrapping in JSX. Ans wrapp your ContainerThings component with it.

In MySubAPp15 create the Context.

In the MySubAPp15 function define a state with useState to hold the items. And share it as the value of your Context.

Now in ContainerThing you can use that Context to extract the state/setState and pass it to your children.

Make it work!

## Exercise (factorizing boilerplate in a component) step2

You could isolate the Context ans its boilerplate in a dedicated component which will hold

- our useState
- the JSX COntext.Provider value = {} code

And will be used like

````jsx
<ItemsContextProvider>
  <ContainerThings/>
</ItemsContextProvider>
)
;
````

## Exercise (removing the Container role) step3

Now that we have a Context, ThingForm and ShwoList could directly access it. So the container is no more a real
container give props to its children bu just composing in JSX.

make it work
