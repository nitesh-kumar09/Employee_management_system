import React,{useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState("")
  const [date, setDate] = useState("")
  const [asignTo, setAsignTo] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  const [newTask, setNewTask] = useState({})

  const [userData,setUserData] = useContext(AuthContext)

  const SubmitHandler =(e)=>{
    e.preventDefault()
    // console.log(taskTitle,date,asignTo,category,description);
    
    setNewTask({taskTitle,date,asignTo,category,description,active:false,newTask:true,failed:true,complete:false})

   const data = userData
  //  console.log(data);
   
   
   data.forEach((element)=>{
      if(asignTo == element.firstname)
      {
        element.tasks.push(newTask)
        element.taskNumbers.newTask = element.taskNumbers.newTask+1
        
      }
   })

   setUserData(data)
   
    setTaskTitle("")
    setDate("")
    setAsignTo("")
    setCategory("")
    setDescription("")


  }

 
  

  return (
   <>
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form onSubmit={(e)=>{
          SubmitHandler(e)
        }} className='flex flex-wrap w-full  items-start justify-between' >
          <div className="w-1/2">
          <div className="">

                 <h3 className='text-sm text-gray-300 mb-0.5' >Task title</h3>
                 <input value={taskTitle} onChange={(e)=>{
                  setTaskTitle(e.target.value)  
                  
                  }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'  type="text" placeholder='Make a UI design' />
              </div>

             <div className="">
                 <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                 <input value={date} onChange={(e)=>{
                  setDate(e.target.value)
                 }}   className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
               </div>

              <div className="">
                 <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                 <input value={asignTo} onChange={(e)=>{
                  setAsignTo(e.target.value)
                 }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name' />
              </div>

               <div className="">
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input value={category} onChange={(e)=>{
                  setCategory(e.target.value)
                }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="text" placeholder='Design, Dev, etc' />
               </div>
             </div>
             

              <div className="w-2/5 flex flex-col items-start">
                  <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                  <textarea value={description} onChange={(e)=>{
                    setDescription(e.target.value)
                  }} className='w-full h-44 text-sm py-2 rounded outline-none border-[1px] border-gray-400 text-black p-4 ' name=""  id=""></textarea>
                  <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full' >Create Task</button>
          </div>

        

     </form>

    </div>
   </>
  )
}

export default CreateTask