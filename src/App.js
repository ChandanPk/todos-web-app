import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/tasks";

function App() {

  const [tasks, setTasks] = useState(["eat", "drink", "sleep", "etc"]);

  const addTask = (newTask)=> {
      setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h1>To Do's</h1>
      <Tasks tasks={tasks} />
      <AddTask addTask= {addTask} />
    </div>
  );
}

export default App;
