import { useState } from "react";

const AddTask = ({ addTask }) => {


    const [newTask, setNewTask] = useState();

    const handleChange = (e)=> {
        setNewTask(e.target.value);
    }


    const handleSubmit = (e)=> {
        e.preventDefault();
        addTask(newTask);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" required onChange={(e)=> {handleChange(e)}} />
            <button>Add task</button>
        </form>
     );
}
 
export default AddTask;