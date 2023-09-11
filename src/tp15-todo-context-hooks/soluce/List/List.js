import PropTypes from 'prop-types';
import {TodoLi} from './TodoLi';
import {useContext} from 'react';
import {TodoContext} from '../TodoContext';

export function List({}) {
    const {tasks, onComplete, onDestroy, onToggle} = useContext(TodoContext);

    return (
      <section className="main">
          <input
            type="checkbox"
            id="toggle-all"
            className="toggle-all"
            onClick={(e) => onToggle(e.target?.checked)}
          />
          <label htmlFor="toggle-all">Tâches finies</label>
          <ul className="todo-list">
              {tasks.map((task) => (
                <TodoLi key={task.id} task={task} onComplete={onComplete} onDestroy={onDestroy}/>
              ))}
          </ul>
      </section>
    );
}

List.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number,
          label: PropTypes.string,
          completed: PropTypes.bool,
      })
    ),
    onToggle: PropTypes.func,
    onComplete: PropTypes.func,
    onDestroy: PropTypes.func,
};
