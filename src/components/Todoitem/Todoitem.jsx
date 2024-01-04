import { useState } from "react";
import './Todoitem.css'
function Todoitem({task,updatetask,deletetask})
{

    const [isediting,setisediting]=useState(false);
    const [editedtext,seteditedtext]=useState('')

    function handleupdate()
    {
        updatetask(task.id,editedtext);
        setisediting(false);
    }

    return(
        <>
         {(isediting)?
         (
            <>
            <input type="text" value={editedtext} onChange={(e)=>seteditedtext(e.target.value)}/>
            <button onClick={handleupdate}>save</button>
            </>
         ):
         (
            <>
              {task.text}
              <button className="btn" onClick={()=>setisediting(true)}>update</button>
              <button className="btn" onClick={()=>deletetask(task.id)}>delete</button>

            </>
         )

        }
        </>
    )

}

export default Todoitem;