import PropTypes from "prop-types";

export function TodoLi({ task, task: { completed }, onComplete, onDestroy }) {
  // console.log('TodoLi', task);
  return (
    <li className={completed ? "completed" : ""}>
      <div className="view">
        <input
          id={"task_" + task.id}
          type="checkbox"
          className="toggle"
          checked={completed}
          onChange={() => onComplete(task)}
        />
        <label htmlFor={"task_" + task.id}>{task.label}</label>
        <button className="destroy" onClick={() => onDestroy(task)} />
      </div>
    </li>
  );
}
TodoLi.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    completed: PropTypes.bool,
  }),
  onComplete: PropTypes.func,
  onDestroy: PropTypes.func,
};
