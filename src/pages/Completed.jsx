function Completed() {

  const tasks =
    JSON.parse(localStorage.getItem("tasks")) || [];

  const completedTasks = tasks.filter(
    (task) => task.completed
  );

  return (
    <div className="page">

      <h1>Completed Tasks</h1>

      {completedTasks.length === 0 ? (
        <p>No Completed Tasks</p>
      ) : (
        completedTasks.map((task) => (
          <div key={task.id}>
            <h3>{task.text} ✅</h3>
          </div>
        ))
      )}

    </div>
  );
}

export default Completed;