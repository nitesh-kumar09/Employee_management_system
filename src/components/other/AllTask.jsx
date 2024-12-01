import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)


  return (
   <>
   
   <div className="bg-[#1c1c1c] p-5 mt-5 rounded  ">
   <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded' >
        <h2 className='text-lg font-medium w-1/5 ' >Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5 ' >New Task</h3>
        <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5 '>Completed Task</h5>
        <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
    </div>
   <div className="h-[80%]  ">
   {userData.map((element,index)=>{
        return  <div key={index} className=' border-2 border-emerald-500 mb-2 py-2 px-4 bg-zinc-900  flex justify-between rounded' >
        <h2 className='w-1/5 text-lg font-medium'  >{element.firstname}</h2>
        <h3 className='w-1/5 text-lg font-medium   text-blue-600' >{element.taskNumbers.newTask}</h3>
        <h5 className='w-1/5 text-lg font-medium  text-yellow-400'>{element.taskNumbers.complete}</h5>
        <h5 className='w-1/5 text-lg font-medium text-green-600'>{element.taskNumbers.active}</h5>
        <h5 className='w-1/5 text-lg font-medium  text-red-600'>{element.taskNumbers.failed}</h5>
    </div>
    })}
   </div> 
   
   
   </div>
   </>
  )
}

export default AllTask