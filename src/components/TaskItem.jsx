function TaskItem({ task, dispatch }) {
  return (
    <div className="task-item">
      <h3>
        {task.text} {task.completed && "✅"}
      </h3>

      <button
        onClick={() =>
          dispatch({
            type: "COMPLETE_TASK",
            payload: task.id,
          })
        }
      >
        Complete
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "DELETE_TASK",
            payload: task.id,
          })
        }
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;