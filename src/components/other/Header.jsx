import React,{useState} from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {
  // console.log(ourData)
  // const [username, setUsername] = useState('')
  
  // if(!ourData)
  // {
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(ourData.firstname)
  // }

  // console.log(props.changeUser);
  
  const logOutUser =()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }
  return (
   <>
    <div className='flex items-end justify-between' >
        <h1 className='text-xl font-semibold' >Hello! <br /><span className='text-3xl' >username👋</span></h1>
        <button onClick={logOutUser}  className='bg-red-600 text-lg font-medium px-5 py-3 rounded-sm text-white' >Log Out</button>
    </div>
   </>
  )
}

export default Header