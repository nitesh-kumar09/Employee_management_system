import React from 'react'

const TaskListNumber = ({ourData}) => {
  // console.log({ourData})
  return (
    <>
    <div className='flex flex-wrap gap-5 w-full  mt-10 ' >
        <div className='rounded-xl py-6 px-9 w-[23.5%] bg-yellow-500 ' >
        <h2 className='text-3xl font-semibold' >{ourData.taskNumbers.newTask}</h2>
        <h3 className='text-3xl font-semibold' >New Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[23.5%] bg-[#2bdc14] ' >
        <h2 className='text-3xl font-semibold' >{ourData.taskNumbers.complete}</h2>
        <h3 className='text-3xl font-semibold' >Completed Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[23.5%] bg-blue-400 ' >
        <h2 className='text-3xl font-semibold' >{ourData.taskNumbers.active}</h2>
        <h3 className='text-3xl font-semibold' >Accepted Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[23.5%] bg-red-600 ' >
        <h2 className='text-3xl font-semibold' >{ourData.taskNumbers.failed}</h2>
        <h3 className='text-3xl font-semibold' >Failed Task</h3>
        </div>
     
     
       
    </div>
    </>
  )
}

export default TaskListNumber