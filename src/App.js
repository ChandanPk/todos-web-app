import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/tasks";

function App() {

  const [tasks, setTasks] = useState([]);
  // const [message, setMessage] = useState(null);

  const addTask = (newTask)=> {
      setTasks([...tasks, newTask])
  }

  const handleDelete = (item)=> {
    let filterTasks = tasks.filter((i)=> {
      return item !== i;
    });
    setTasks(filterTasks);
  }

  // console.log(tasks.length)

  return (
    <div className="App">
      <h1>To Do's</h1>
      { tasks.length === 0 && <p>no tasks until now. Lets start adding..</p>}
      <Tasks tasks={tasks} handleDelete={handleDelete} />
      <AddTask addTask= {addTask} />
    </div>
  );
}

export default App;
