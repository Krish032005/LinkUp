import React from 'react'

const Login = () => {
  return (
    // container
    <div className='w-full h-screen 
    flex justify-center items-center '>

        {/* box */}
        <div className='w-1/2 h-[60%] p-4 bg-amber-700 rounded-2xl'>
            <h1>LinkUp</h1>
            <label htmlFor="username">UserName :</label>
            <input className='block px-4 py-2 bg-amber-300 rounded-4xl'
            type="text" placeholder="Username.." id='username' />
        </div>

    </div>
  )
}

export default Login