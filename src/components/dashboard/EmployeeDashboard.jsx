import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  
  return (
    <>
    <div className='p-8 bg-[#1C1C1C] h-screen w-full ' >
        <Header changeUser={props.changeUser} ourData={props.ourData} />
        <TaskListNumber  ourData={props.ourData}/>
        <TaskList  ourData={props.ourData}/>
    </div>
    </>
  )
}

export default EmployeeDashboard