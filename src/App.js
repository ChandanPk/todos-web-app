import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/tasks";

function App() {

  const [tasks, setTasks] = useState(["eat", "drink", "sleep", "etc"]);
  // const [message, set]

  const addTask = (newTask)=> {
      setTasks([...tasks, newTask])
  }

  const handleDelete = (item)=> {
    console.log(item);
    let filterTasks = tasks.filter((i)=> {
      return item !== i;
    });
    setTasks(filterTasks);
  }

  return (
    <div className="App">
      <h1>To Do's</h1>
      <Tasks tasks={tasks} handleDelete={handleDelete} />
      <AddTask addTask= {addTask} />
    </div>
  );
}

export default App;
