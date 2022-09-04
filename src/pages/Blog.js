import React from 'react'

import {useLocation} from 'react-router-dom'

const Blog = () => {
    const location = useLocation()

    const {state} = location.state
    console.log(state)
    
  return (
    <div className='md:container md:mx-auto w-screen border h-screen'>
        <div className='w-full h-72 border'>
            <img src={state.url} alt="blog" className='bg-contain bg-center h-full w-full' />
        </div>
        <div className='mt-5 border p-5'>
            <h1 className='text-4xl font-bold my-5'>{state.title}</h1>
            <p className='font-medium text-xl tracking-wide leading-10 text-justify my-5'>{state.content}</p>
            <p className='font-medium text-gray-400'>{state.date}</p>

        </div>
    </div>
  )
}

export default Blog