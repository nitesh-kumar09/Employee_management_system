import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ourData}) => {
  // console.log({ourData})
  return (
    
    <>
    <div id="taskList"  className=" overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full py-5 px-5  mt-10">
     {ourData.tasks.map((element,index)=>{
        if(element.active)
          {
            return <AcceptTask key={index} data={element}  />
          }
          if(element.newTask)
          {
            return <NewTask  key={index} data={element} />
          }
          if(element.complete)
          {
            return <CompleteTask key={index} data={element} />
          }
          if(element.failed)
          {
            return <FailedTask key={index} data={element}/>
          }
      
     })}
    </div>
    </>
  )
}

export default TaskList