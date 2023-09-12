// import './App.css';
// remove milligram.css for single page Todo examples
// import './milligram.css';
// import './milligram.css';
//import {TodoWithFullHttp} from './tp22-todo-full-http/soluce/TodoWithFullHttp';

// import MyApp from './tp19-todo-router/MyApp';
import { MyFormFunction_03_init ,MyFormFunction_03_step1,MyFormFunction_03_step2,MyFormFunction_03_step3,MyFormFunction_03_step4,MyFormFunction_03_step5,MyFormFunction_03_step6,MyFormFunction_03_step7,MyFormFunction_03_step8} from "./tp03-props-defaultProps-input-unmanaged/init/MyFormFunction_03-init";

function App() {
  return (
    <div className="container">
      {/*tp-03*/}
      {/* <MyFormFunction_03_init />
      <MyFormFunction_03_init stringAttr="33" integerAttr={33}/> */}
      {/* <MyFormFunction_03_step1 buttonTitle={'OKK'}/>
       <MyFormFunction_03_step2 buttonTitle={'OKK2'}/>
      <MyFormFunction_03_step3 buttonTitle={'OK3'}/>
     <MyFormFunction_03_step4 buttonTitle={'OK4'}/>
    <MyFormFunction_03_step5 buttonTitle={'OK5'}/> */}
    {/* <MyFormFunction_03_step6 buttonTitle={'OK6'}/> */}
  {/* <MyFormFunction_03_step7 buttonTitle={'OK7'}/> */}
  <MyFormFunction_03_step8 buttonTitle={'OK7'}/>

      {/*  refs */}
      {/*<MyFormComponentForRef/>*/}

      {/*tp-04*/}
      {/*<Counter/>*/}
      {/*<CounterWithInitialValue initialCounter={22}/>*/}

      {/*tp-05 mimicking hooks to show how they work DEMO*/}
      {/*  recoding hooks by hand to understand their logic  */}
      {/*<Counter/>*/}
      {/*<CounterMimick/>*/}
      {/*<ListOfThingsMimickMulti/>*/}

      {/*tp-06-list-of-things*/}
      {/*<ListOfThingsOnKey13/>*/}
      {/*<ListOfThingsOnSubmit/>*/}
      {/*<ListOfThings_ASYNC_PB/>*/}

      {/*tp-07 tic-tac-toe*/}
      {/*For tic-tac-toe,    remove import './milligram.css'; at the top!*/}
      {/*<AppTicTacToeSoluce/>*/}
      {/*<AppTicTacToeSoluceExtra3/>*/}

      {/*tp-08 lifting state up*/}
      {/*<ThingsContainer/>*/}

      {/*tp-09 todo                   remove import './milligram.css'; at the top! */}
      {/*tp-10 todo multicomp         remove import './milligram.css'; at the top! */}
      {/*<Todo/>*/}

      {/*DEMOS*/}
      {/*tp-11 todo multicomp memo    remove import './milligram.css'; at the top! */}
      {/*tp-11 todo multicomp memo useTasks         ... same ...                   */}
      {/*tp-11 todo multicomp optim   remove import './milligram.css'; at the top! */}
      {/*<Todo/>*/}

      {/*tp-12 list of things multi   re-add import './milligram.css'; at the top!*/}
      {/*<MultiList/>*/}

      {/*tp13 Context*/}
      {/*<ThingsWrapper/>*/}

      {/*tp14-multi-list-context*/}
      {/*<MultiListContext/>*/}

      {/*tp-15-todo-context remove import './milligram.css'; at the top!*/}
      {/*<Todo/>*/}

      {/*tp16-demo-lifecycle-hooks-FC*/}
      {/*<SimpleUseEffect01/>*/}
      {/*<SimpleNoUseEffect02/>*/}
      {/*<SimpleUseEffect03/>*/}
      {/*For LifeCycle demo, remove StrictMode in index.js !*/}
      {/*<AppDemoChildOnlyLifeCycle/>*/}
      {/*demo with full logs is too long, so above is more straightforward and manageable */}

      {/*tp17-counter-effect*/}
      {/*<CounterEffectWithInterval/>*/}

      {/*tp18-router-simple*/}
      {/*<MyAppOldRouterApi/>*/}
      {/*<MyAppNewRouterApi/>*/}

      {/*tp19-todo-router*/}
      {/*<MyRoutedTodoApp/>*/}

      {/*tp21-todo-single-page-http*/}
      {/*Launch the start.api*/}
      {/*remove import './milligram.css'; at the top!*/}
      {/*<TodoWithHttp/>*/}

      {/*tp22-todo-full-http*/}
      {/*Launch the start.api*/}
      {/*remove import './milligram.css'; at the top!*/}
      {/* <TodoWithFullHttp/> */}
    </div>
  );
}

// for ListOfThingsMimickMulti to work you have to remove StrictMode in index.js !
export default App;
