import React, {useContext} from 'react'

import Card from '../Components/Card'
import Footer from '../Components/Footer'
import {Data} from '../Data'

import { useHistory } from 'react-router-dom'

const Home = () => {

const history = useHistory()

  return (
    <div className='h-full md:container md:mx-auto'>
        <div className='h-full grid grid-cols-3 gap-4 p-5'>
            {
                Data.map((data, index) => (
                    <div key={index} onClick={() => {
                        history.push({
                            pathname:`/blog/${data.title}`,
                            state:{
                                state: data
                            }
                        })
                    }} className="col-span-1 p-5 flex items-center justify-center">
                    <Card data={data} />
                    </div>       
                ))
            }
            {/* <div className="col-span-1 flex p-5 items-center justify-center">
            <Card />
            </div>
            <div className="col-span-1 flex p-5 items-center justify-center">
            <Card />
            </div>
            <div className="col-span-1 p-5 flex items-center justify-center">
            <Card />
            </div>
            <div className="col-span-1 p-5 flex items-center justify-center">
            <Card />
            </div> */}
            </div>
            {/* <Footer /> */}
</div>
  )
}

export default Home