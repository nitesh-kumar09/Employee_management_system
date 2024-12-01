import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="h-full w-[300px] rounded-xl bg-blue-600 p-4 flex-shrink-0 ">
    <div className="flex justify-between items-center ">
      <h3 className='bg-red-600 text-sm px-3 py-1 rounded' >{data.category}</h3>
      <h4 className= 'text-sm px-3 py-1 rounded' >{data.date}</h4>
      
    </div>
    <h2 className='mt-5 text-2xl font-semibold' >{data.title}</h2>
    <p className="text-sm mt-2">{data.description}</p>

    <div className="mt-2">
        <button className=' w-full bg-red-600 rounded py-2 px-4' >Failed Task</button>
    </div>
  </div>
  )
}

export default FailedTask