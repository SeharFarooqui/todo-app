import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Nav from './Nav';
import Addtasks from './Components/Addtasks';
function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState(()=>{
    const Saved=localStorage.getItem('tasks');
    return Saved?JSON.parse(Saved):[];
  })

  const Buttononclick = () => {
    if (task.trim() !== "") {

      setTasks([...tasks,{id:uuidv4(),text: task ,isDone: false, 
        date: new Date().toLocaleDateString()}])
      setTask("");
    }
  }
const HandleDelete = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
};
const HandleToggleDone = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    )
  );
};
useEffect(() => {
  localStorage.setItem('tasks',JSON.stringify(tasks))
}, [tasks])

  return (
    <>
    
<div>
  <Nav/>
</div>

    <div>
      <header>
        <Addtasks task={task} setTask={setTask} Buttononclick={Buttononclick}/>
      </header>
      
      </div>
      <div>
        <ul className="mt-6 space-y-2 ">
          
          {tasks.map((task,index)=>(
            <li className=" flex justify-between  capitalize px-4 py-2 text-purple-700  " key={task.id}>
              <div className="flex items-center space-x-2 flex-1 min-w-0">
              <span className="mr-3 text-purple-700 font-bold">{index + 1}.</span>
               <span
          className={`${task.isDone ? "line-through text-gray-500" : ""} break-words whitespace-normal`}
        >
          {task.text}
        </span> 
         </div>
        <div className="w-36 flex-shrink-0 text-right px-4"><small className=" text-purple-700 ">📅 {task.date}</small></div>
      
        
        
        
              <div className=' flex gap-4 items-center'>
          <button  onClick={()=>HandleDelete(task.id)}     className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1 transition duration-200">Delete</button>
                
             <button
        onClick={() => HandleToggleDone(task.id)}
        className={`px-3 py-1 text-sm rounded-lg shadow-md transition duration-200 
          ${task.isDone 
            ? "bg-yellow-500 hover:bg-yellow-600 text-white" 
            : "bg-green-500 hover:bg-green-600 text-white"}`}
      >
        {task.isDone ? "Undo" : "Done"}
      </button> </div>

            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
