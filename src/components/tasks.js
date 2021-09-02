const Tasks = ({ tasks, handleDelete }) => {
    return (
        <div className="tasks">
            {tasks.map(task => {

              return <div className="task">
                          <p>{task}</p>
                          <span onClick={()=> {handleDelete(task)}}>x</span>
                     </div>
            })}
        </div>
    );
}

export default Tasks;