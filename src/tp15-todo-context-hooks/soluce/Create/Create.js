import {memo, useContext, useState} from 'react';
import {createNewTask} from '../task-util';
import PropTypes from 'prop-types';
import {TodoContext} from '../TodoContext';

let countCreate = 0;

function CreateLocal({}) {
    const [label, setLabel] = useState('');

    const {onCreate} = useContext(TodoContext);

    console.log('CREATE ', countCreate++);

    function onCreateLocal(event) {
        event.preventDefault();
        const newTask = createNewTask(label);
        setLabel('');
        onCreate(newTask);
    }

    return (
      <form onSubmit={onCreateLocal}>
          <input
            type="text"
            className="new-todo"
            placeholder="Ajouter une tâche"
            value={label}
            autoComplete="off"
            autoFocus={true}
            onChange={(e) => setLabel(e.target.value)}
          />
      </form>
    );
}

// memo on a FC is similar to a PureComponent CC
export const Create = memo(CreateLocal);

CreateLocal.propTypes = {
    onCreate: PropTypes.func,
};
