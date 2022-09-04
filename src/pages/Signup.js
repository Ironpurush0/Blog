import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import authContext from '../context/AuthContext'
import Form from '../Components/Form'

const Signup = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const {user, setUser} = useContext(authContext)

  const handleNameChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }
  const handleEmailChange = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    setUser(true)
    setEmail("")
    setName("")
    setPassword("")
    localStorage.setItem('name', JSON.stringify(name))
    localStorage.setItem('email', JSON.stringify(email))
    localStorage.setItem('password', JSON.stringify(password))
    // localStorage.setItem('user', JSON.stringify(user))
  }
  
  return (
    <div className='h-screen py-16 flex items-center justify-center md:container md:mx-auto'>
        <form className='p-5 w-96 h-full border flex flex-col items-center justify-center'>
            <h2 className='py-5 font-bold text-2xl'>Signup</h2>
            <input type="Name" className='border w-72 p-4'  placeholder='Name' onChange={handleNameChange} />
            <input type="text" className='border w-72 p-4 my-5'  placeholder='Email' onChange={handleEmailChange} />
            <input type="password" className='border w-72 p-4 my-5'  placeholder='Password'onChange={handlePasswordChange} />
            <button className='mt-5 px-5 py-2 text-xl font-semibold bg-blue-600 rounded-md' onClick={handleSubmit}>Signup</button>
        </form>
    </div>
  )
}

export default Signup