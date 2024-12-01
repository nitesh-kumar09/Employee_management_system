import React,{useState} from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }
  return (
    <>
    <div className='flex items-center justify-center h-screen w-screen' >
        <div className="border-2 rounded-xl items-center p-20 border-emerald-600">
            <form className='flex flex-col items-center justify-center' onSubmit={(e)=>{
                submitHandler(e);
            }} >
                <input value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} required className='  outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-4 px-5 text-xl rounded-full' type="email"  placeholder='Enter your email' />
                <input value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                    
                }}  className='  outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-4 px-5 text-xl rounded-full mt-3' type="password" placeholder='Enter password' />
                <button className=' text-white outline-none bg-emerald-600 placeholder:text-white border-2 border-none py-4 px-9  text-xl w-full rounded-full mt-3 ' >Login</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login