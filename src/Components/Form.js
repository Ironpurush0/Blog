import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

const Form = () => {
    const [authentication, setAuthentication] = useState(true)
    const [user, setUser] = useState(true)
    // const [login, setLogin] = useState(false)

    const {login, signup} = useParams()


  return (
    <>
    {
        login && (
            <form className='p-5 w-96 h-full border flex flex-col items-center justify-center'>
            <h2 className='py-5 font-bold text-2xl'>Login</h2>
            <input type="text" className='border w-72 p-4' placeholder='Email' />
            <input type="password" className='border w-72 p-4 my-5' placeholder='Password' />
            <button className='mt-5 px-5 py-2 text-xl font-semibold bg-blue-600 rounded-md'>Login</button>
        </form>
        ) 
    }
    {
        signup && (
            <form className='p-5 w-96 h-full border flex flex-col items-center justify-center'>
            <h2 className='py-5 font-bold text-2xl'>Login</h2>
            <input type="Name" className='border w-72 p-4' placeholder='Name' />
            <input type="text" className='border w-72 p-4 my-5' placeholder='Email' />
            <input type="password" className='border w-72 p-4 my-5' placeholder='Password' />
            <button className='mt-5 px-5 py-2 text-xl font-semibold bg-blue-600 rounded-md'>Login</button>
        </form>
        )
    }
    </>
  )
}

export default Form