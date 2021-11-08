import { useState } from "react";

const AddTask = ({ addTask }) => {

    //state variables
    const [newTask, setNewTask] = useState('');

    //controlled input
    const handleChange = (e)=> {
        setNewTask(e.target.value);
    }

    //handle submit
    const handleSubmit = (e)=> {
        e.preventDefault();
        addTask(newTask);
        setNewTask('');
        
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input value={newTask} type="text" required onChange={(e)=> {handleChange(e)}} />
            <button>+</button>
        </form>
     );
}
 
export default AddTask;