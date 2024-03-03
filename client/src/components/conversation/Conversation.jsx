import React from 'react';
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

export default function Conversation({conversation,lastIdx}) {
  const {selectedConversation,setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?.id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-zinc-800 rounded p-2 cursor-pointer py-2 ${isSelected ? bg-gray-600:""}`}
    onClick={()=>setSelectedConversation(conversation)}
    >
        <div className={`avatar ${isOnline ? "online" : ""} `}>
        <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
        </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className='font-bold text-gray-200 '>{conversation.fullName}</p>
            </div>
        </div>

    </div>
    {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    
    </>

  )
}
