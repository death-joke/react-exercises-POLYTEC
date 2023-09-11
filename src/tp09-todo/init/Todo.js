// import {useState} from 'react';
// import {createNewTask, INITIAL_TASKS,} from './task-util';
// import PropTypes from 'prop-types';
import './Todo.css';

export function Todo() {

    // YOUR JOB IS TO IMPLEMENT THE LOGIC OF THIS COMPONENT

    return (
      <div className="App">
          <section className="todoapp">
              <header className="header">
                  <h1>Todo APP</h1>
              </header>
              <form>
                  <input
                    type="text"
                    className="new-todo"
                    placeholder="Ajouter une tâche"
                    autoComplete="off"
                    autoFocus={true}
                  />
              </form>
              <section className="main">
                  <input type="checkbox" id="toggle-all" className="toggle-all"/>
                  <label htmlFor="toggle-all">Tâches finies</label>
                  <ul className="todo-list">
                      <li>
                          <div className="view">
                              <input id="task" type="checkbox" className="toggle"/>
                              <label htmlFor="task">Tâche</label>
                              <button className="destroy"/>
                          </div>
                      </li>
                  </ul>
              </section>
              <footer className="footer">
          <span className="todo-count">
            <strong>## tâches restantes</strong>
          </span>
              </footer>
          </section>
      </div>
    );
}
