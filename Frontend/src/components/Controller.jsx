import React from 'react'

const Controller = () => {
  return (
    <div className='py-4 px-2'>
       
        {/* Profile section  ONLY DESKSTOP VERSION */}

        {/* Top */}
        <div className='text-center w-full '>
            <img className='w-25 h-25 object-cover rounded-full justify-self-center'
            src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="profile image" />
            <h1 className="font-bold text-xl">Username</h1>
            <h2 className='font-semibold'>Location/Bio</h2>

            {/* Followers Post Following Count */}
            <div className='flex justify-around'>
                <div>
                    <h3 className='font-bold text-lg'>12</h3>
                    <p className='font-semibold'>Posts</p>
                </div>
                <div>
                    <h3 className='font-bold text-lg'>121K</h3>
                    <p className='font-semibold'>Followers</p>
                </div>
                <div>
                    <h3 className='font-bold text-lg'>567</h3>
                    <p className='font-semibold'>Following</p>
                </div>
            </div>
        </div>

        {/* Controller */}
        <div>
            <ul>
                <li>Feed</li>
                <li>Search</li>
                <li>Message</li>
                <li>Profile</li>
            </ul>
        </div>

        {/* message or contact */}
        <div>
            <img src="" alt="" />
            <h1>Username</h1>
            <i>Message icon</i>
        </div>
    </div>

  )
}

export default Controller