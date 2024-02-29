import React from 'react'

export default function Conversation() {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-zinc-800 rounded p-2 cursor-pointer py-2'>
        <div className='avatar online'>
        <div className="w-12 rounded-full">
            <img src="" alt="user avatar" />
        </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className='font-bold text-gray-200 '>surya</p>
                <span className='text-xl'>(-_-)</span>


            </div>
        </div>

    </div>
    <div className="divider my-0 py-0 h-1"></div>
    </>

  )
}
