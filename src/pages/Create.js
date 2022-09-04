import React, {useState} from 'react'

const Create = () => {

  return (
    <div className='h-screen py-16 flex items-center justify-center md:container md:mx-auto'>
        <form className='p-5 w-96 h-full border flex flex-col items-center justify-center'>
            <h2 className='py-5 font-bold text-2xl'>Post</h2>
            <input type="file" className='border w-72 p-4' alt="input"  />
            <input type="email" className='border w-72 p-4 my-5' placeholder='Title' />
            <input type="password" contentEditable='true' className='border w-72 p-4 my-5' placeholder='Content'  />
            <input type='datetime-local' className='border w-72 p-4 my-5' placeholder='Content'  />
            <button className='mt-5 px-5 py-2 text-xl font-semibold bg-blue-600 rounded-md'>Submit</button>
        </form>
    </div>
  )
}

export default Create