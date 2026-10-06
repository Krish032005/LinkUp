import React from 'react'
import Controller from './Controller'
import Feed from './Feed'
import Update from './Update'

const Home = () => {
  return (
    <div className='w-full min-h-screen px-4 py-2 grid grid-cols-4 gap-3'>
        <div className='bg-amber-300'>
        <Controller/>
        </div>

        <div className='bg-blue-300 col-span-2'>
        <Feed/>
        </div>

        <div className='bg-amber-700'>
        <Update/>
        </div>
    </div>
  )
}

export default Home