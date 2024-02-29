import React from 'react'
import GenderCheckbox from './GenderCheckbox';

export default function Signup() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className='text-3xl font-semibold text-gray-300'>SignUp
            <span className='text-purple-500'> Chat App</span>
            </h1>

            <form >
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full name</span> 
                    </label>
                    <input type="text" placeholder='Enter full name' className='w-full input input-bordered h-10' />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span> 
                    </label>
                    <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>E-mail</span> 
                    </label>
                    <input type="email" placeholder='Enter email' className='w-full input input-bordered h-10' />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span> 
                    </label>
                    <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Confirm password</span> 
                    </label>
                    <input type="text" placeholder='Enter password again' className='w-full input input-bordered h-10' />
                </div>
                <GenderCheckbox/>

                <a href='#' className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
                    
                    Already have an account

                </a>
                <div>
                    <button className='btn btn-block btn-sm mt-2'>Login</button>
                </div>

            </form>
        </div>

    </div>
  )
}
