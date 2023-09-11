import {List} from './List/List';
import {Create} from './Create/Create';
import './Todo.css';
import TodoContextProvider from './TodoContext';

let count = 0;

export function Todo() {
    console.log('TODO ', count++);

    return (
      <TodoContextProvider>
          <div className="App">
              <section className="todoapp">
                  <header className="header">
                      <h1>Todo APP</h1>
                      <Create/>
                  </header>
                  <List/>
                  <footer className="footer">
            <span className="todo-count">
              {/* <strong>{remainingTasks} tâches restantes</strong> */}
            </span>
                  </footer>
              </section>
          </div>
      </TodoContextProvider>
    );
}
