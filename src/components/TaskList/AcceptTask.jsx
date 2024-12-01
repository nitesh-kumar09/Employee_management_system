import React from 'react'

const AcceptTask = ({data}) => {
  // console.log(data.title);
  
  return (
    <>
     <div className="h-full w-[300px] rounded-xl bg-green-400 p-4 flex-shrink-0 ">
        <div className="flex justify-between items-center ">
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded' >{data.category}</h3>
          <h4 className= 'text-sm px-3 py-1 rounded' >{data.date}</h4>
          
        </div>
        <h2 className='mt-5 text-2xl font-semibold' >{data.title}</h2>
        <p className="text-sm mt-2">{data.description
        }</p>
        <div className="flex justify-between mt-4">
            <button className='bg-green-500 py-2 px-3 rounded text-sm' >Mark as Completed</button>
            <button className='bg-red-500 py-2 px-3 rounded text-sm' >Mark as Failed</button>
        </div>
      </div>
    </>
  )
}

export default AcceptTask