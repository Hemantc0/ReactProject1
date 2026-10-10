import TaskItem from "./TaskItem";

function TaskList({ tasks, dispatch }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            dispatch={dispatch}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;