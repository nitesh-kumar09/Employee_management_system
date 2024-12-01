import React, { useContext, useEffect,useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashBoard from './components/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import {AuthContext} from './context/AuthProvider'

const App = () => {


  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const [userData,setUserData] = useContext(AuthContext)
  
  // localStorage.clear()

  useEffect(() => {
    setLocalStorage()
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      
    }

  },[])
    

  const handleLogin = (email, password)=>{
    if(email == 'admin@example.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      // console.log(user)
  }
  else if(userData){
    const employee = userData.find((e)=>email == e.email && e.password == password)
    if(employee)
    {
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
    }
    // console.log(user)
  }
  else{
    alert("invalid Credentials");
  }

}


  return (
   <>
  {!user ? <Login handleLogin={handleLogin} /> :''}
  {user == 'admin' ? <AdminDashBoard changeUser={setUser} /> : (user =='employee'? <EmployeeDashboard changeUser={setUser} ourData={loggedInUserData} />:null)}
   </>
  )
}

export default App