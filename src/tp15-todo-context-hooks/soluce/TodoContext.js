import { createContext } from "react";
import { useTasks } from "./useTasks";

export const TodoContext = createContext(null);

export default function TodoContextProvider({ children }) {
  const { tasks, remainingTasks, onComplete, onDestroy, onToggle, onCreate } = useTasks();

  return (
    <TodoContext.Provider
      value={{ tasks, remainingTasks, onComplete, onDestroy, onToggle, onCreate }}
    >
      {children}
    </TodoContext.Provider>
  );
}
