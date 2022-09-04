import React, { useState, useEffect, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import Form from '../Components/Form'
import authContext  from '../context/AuthContext'

const Login = () => {
    const [values, setValues] = useState({})
    const {user, setUser} = useContext(authContext)

    const history = useHistory()

    const handleChange = (e) => {
        e.preventDefault()
        setValues(prevState => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit = () => {
        history.push('/')
        setUser(true)
    }
    

  return (
    <div className='h-screen py-16 flex items-center justify-center md:container md:mx-auto'>
        <form className='p-5 w-96 h-full border flex flex-col items-center justify-center'>
            <h2 className='py-5 font-bold text-2xl'>Login</h2>
            <input type="email" className='border w-72 p-4' placeholder='Email' name="email" value={values.email} onChange={handleChange} />
            <input type="password" className='border w-72 p-4 my-5' placeholder='Password' name='password' value={values.password} onChange={handleChange} />
            <button className='mt-5 px-5 py-2 text-xl font-semibold bg-blue-600 rounded-md' onClick={handleSubmit} >Login</button>
        </form>
    </div>
  )
}

export default Login