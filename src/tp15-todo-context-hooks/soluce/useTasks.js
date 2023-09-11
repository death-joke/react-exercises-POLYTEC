import { useCallback, useState } from "react";
import { INITIAL_TASKS } from "./task-util";

export function useTasks() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  // Derived
  const remainingTasks = tasks.filter((t) => !t.completed).length;

  function onComplete(task) {
    setTasks(tasks.map((t) => (t.id === task.id ? { ...task, completed: !task.completed } : t)));
  }

  function onDestroy(task) {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  function onToggle(checked) {
    let modified = false;
    const newTasks = tasks.map((t) => {
      if (t.completed === checked) {
        return t;
      } else {
        modified = true;
        return { ...t, completed: checked };
      }
    });
    if (modified) {
      setTasks(newTasks);
    }
  }

  const onCreate = useCallback((newTask) => setTasks((tasks) => [...tasks, newTask]), []);

  return { tasks, remainingTasks, onComplete, onDestroy, onToggle, onCreate };
}
