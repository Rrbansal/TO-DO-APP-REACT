import { useEffect, useState } from "react";
import Todoitem from "../Todoitem/Todoitem";
import './Todolist.css'

function Todolist()
{
    // two states are maintained which are task array and new task to be added
    const [tasks,settask]=useState([]);
    const [newtask,setnewtask]=useState('');

    // addtask function
    function addtask()
    {
        if(newtask.trim()!=='')
        {
            settask([...tasks,{id:Date.now(),text:newtask}]);
        }
        // so input feild mei ab kuch na show ho
        setnewtask('');
    }

    useEffect(()=>
    {
        const storedtasks=localStorage.getItem('tasks');
        if(storedtasks)
        {
            settask(JSON.parse(storedtasks));
        }

    },[])
    useEffect(()=>
    {
        localStorage.setItem('tasks',JSON.stringify(tasks));

    },[tasks])

    function updatetask(id,newtext)
    {
        const update=tasks.map((task)=>task.id===id?{...task,text:newtext}:task);
        settask(update);
    }
    function deletetask(id)
    {
        const del=tasks.filter((task)=>task.id!==id);
        settask(del);
    }

    return(
        <>
        <div className="task-input">
          <input  type="text" value={newtask} onChange={(e)=>setnewtask(e.target.value)} />
          <button onClick={addtask}>add task</button>
          <ul>        
            {
               tasks.map((task)=>(
                <div>
               <Todoitem key={task.id} task={task} updatetask={updatetask} deletetask={deletetask}/> 
               <br/>
               </div>
                 ))
            }
          </ul>
          </div>
        </>
    )


}

export default Todolist;

// some points 
//value={newtask} to dipslay newtask in input field
