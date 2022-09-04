import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'

import authContext from '../context/AuthContext'


const NavBar = () => {
  const {user, setUser} = useContext(authContext)

  const handleOnClick = () => {
    setUser(false)
    localStorage.removeItem('user', user)
  }

  const userName = JSON.parse((localStorage.getItem("name")))

  return (
    <div className='w-full border bg-slate-200 flex items-center justify-center h-24'>
        <div className="md:container md:mx-auto flex items-center justify-between">
            <h1 className='text-4xl font-bold'>Blogger</h1>
            <div className='p-2'>
                <ul className='flex text-2xl font-semibold'>
                    <NavLink to="/" className='px-4 cursor-pointer'>Home</NavLink>
                    <NavLink to="/create" className={`px-4 cursor-pointer ${!user && 'hidden'}`}>Create</NavLink>
                    <NavLink to="/" onClick={handleOnClick} className={`px-4 cursor-pointer ${!user && 'hidden'}`}>Logout</NavLink>
                    <NavLink to="/login" className={`px-4 cursor-pointer ${user && 'hidden'}`}>Login</NavLink>
                    <NavLink to="/signup" className={`px-4 cursor-pointer ${user && 'hidden'}`}>Signup</NavLink>
                </ul>
                
                <p className='px-4 cursor-pointer'>{user && userName}</p>
            </div>
        </div>
    </div>
  )
}

export default NavBar