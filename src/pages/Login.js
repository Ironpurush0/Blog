import React, { useState, useEffect, useContext } from 'react'
import {useHistory} from 'react-router-dom'
// import Form from '../Components/Form'
import authContext  from '../context/AuthContext'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [data, setData] = useState({})
    const {user, setUser} = useContext(authContext)

    const history = useHistory()

    // console.log(JSON.parse(localStorage.getItem("email")))
    // console.log(JSON.parse(localStorage.getItem("password")))

    const emailHandler = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email !== JSON.parse(localStorage.getItem("email")) || password !== JSON.parse(localStorage.getItem("password"))){
        alert("Invalid creds")
        } else {
            history.push('/')
            
        setUser(true)
        }
        // console.log("hello")
    }

    useEffect(() => {
        console.log(user)
    }, [user])
    

  return (
    <div className='h-screen py-16 flex items-center justify-center md:container md:mx-auto'>
        <form className='p-5 w-96 h-full border flex flex-col items-center justify-center'>
            <h2 className='py-5 font-bold text-2xl'>Login</h2>
            <input type="email" className='border w-72 p-4' placeholder='Email' name="email" value={email} onChange={emailHandler} />
            <input type="password" className='border w-72 p-4 my-5' placeholder='Password' name='password' value={password} onChange={passwordHandler} />
            <button className='mt-5 px-5 py-2 text-xl font-semibold bg-blue-600 rounded-md' onClick={handleSubmit} >Login</button>
        </form>
    </div>
  )
}

export default Login