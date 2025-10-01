import React from 'react'

const Addtasks = ({task,setTask,Buttononclick}) => {
  return (

    <div className="w-full flex justify-center mt-12">
      <div className="flex items-center w-full max-w-3xl">
        <input
          type="text"
          value={task}
          placeholder="Type your tasks here to add"
          className="flex-1 px-4 py-3 rounded-lg  text-purple-700 
                      placeholder:text-xl  border  border-gray-400 
             focus:outline-none focus:ring-2 focus:ring-purple-700
                    "
          onChange={(e)=>(setTask(e.target.value))}
           onKeyDown={(e) => {
            if (e.key === "Enter") {
              Buttononclick(); 
            }
          }}
          
        />
        <button onClick={Buttononclick} ><img
          src="Add button.png"
          alt="button"
          className="ml-3 w-12 h-12 cursor-pointer"
        /></button>
        
      </div>
    </div>
  )
}




export default Addtasks
