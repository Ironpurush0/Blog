import React from 'react'

const Card = ({data}) => {
  return (
    <div className='rounded-lg border w-auto h-auto p-2'>
        <div className='border w-full h-full rounded-md'>
            <img 
            alt="blog"
            src={data.url}  
            className='bg-contain'/>
        </div>
        <div className='p-5'>
            <h1 className='font-bold text-4xl my-6 text-justify'>{data.title}</h1>
            <p className='font-medium text-xl my-4 text-ellipsis'>{data.content}</p>
            <p>{data.date}</p>
        </div>
    </div>
  )
}

export default Card