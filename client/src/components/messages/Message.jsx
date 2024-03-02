import React from 'react'
import {useAuthContext} from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import {extractTime} from '../../utils/extractTime'


export default function Message({message}) {
  const {authUser} =useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const fromOther = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic :selectedConversation?.profilePic;
  const bubbleBg = fromMe ? "bg-blue-500":"";
  const formatTime = extractTime(message.createdAt);
  return (
    <div className={`chat ${fromOther}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilePic} alt="chat bubble" />

            </div>
        </div>
        <div className={`chat-bubble text-white  ${bubbleBg} p-2`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formatTime}</div>
    </div>
  )
}
