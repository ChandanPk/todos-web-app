const Tasks = ({ tasks }) => {
    return (
        <div className="tasks">
            {tasks.map(task => {

              return <div className="task">
                          <p>{task}</p>
                     </div>
            })}
        </div>
    );
}

export default Tasks;