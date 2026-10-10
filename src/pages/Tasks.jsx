import { useReducer, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

import {
  taskReducer,
} from "../reducer/taskReducer";

function Tasks() {

  // Load tasks from localStorage
  const storedTasks =
    JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, dispatch] = useReducer(
    taskReducer,
    storedTasks
  );

  // Save tasks in localStorage
  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  return (
    <div className="page">

      <h1>Tasks Page</h1>

      <TaskForm dispatch={dispatch} />

      <TaskList
        tasks={tasks}
        dispatch={dispatch}
      />

    </div>
  );
} 

export default Tasks;