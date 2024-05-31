import React from 'react'
import { IoIosMore } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { SlCursor } from "react-icons/sl";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import Suggestions from './Suggestions';


const Post = () => {
  return (
    <>
      <div className="post">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="user">
              <div className="flex items-center justify-center h-[43px] w-[43px] rounded-[50%] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                <img src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/07/19/1244553-untitled-design-2023-07-19t181212.434.jpg?im=Resize=(400" className='w-[40px] h-[40px] object-cover rounded-[50%] border-2 border-white' alt="" />
              </div>
            </div>

            <h3 className=' font-semibold text-[16px] ml-1'>Mahdifarooqui  &#x2022; <span className=' text-slate-500 font-light'>5h</span></h3>
          </div>

          <i className='font-semibold text-[25px] cursor-pointer'><IoIosMore/></i>

        </div>

        <img className='postImg' src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?cs=srgb&dl=pexels-pixabay-35967.jpg&fm=jpg"  alt="" />
        
        <div className="flex items-center justify-between mt-3 ">
         <div className="flex items-center gap-3">
          <i className='text-2xl cursor-pointer'><FaRegHeart /></i>
          <i className='text-2xl cursor-pointer'><FaRegComment /></i>
          <i className='text-2xl cursor-pointer'><SlCursor /></i>
         </div>
         <i className='text-3xl cursor-pointer'><MdOutlineBookmarkBorder/></i>
        </div>
        <p className='text-sm my-2 font-medium'>741,388 likes</p>
        <p className='text-[14px]'><span className='font-[550]'>mahdifarooqui</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident fugit quasi tempora doloribus dolorem laboriosam, magni perferendis!</p>

        <p className=' text-slate-500 text-[14px] mt-2 cursor-pointer font-light'>View all 13,345 comments</p>

        <input className='w-full focus:border-btnBg bg-transparent pt-[5px] pb-[10px] outline-none border-none border-b-2' type="text" placeholder="Add a comment..."/>
      </div>
         
         <Suggestions/>
 
      <div className="post">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="user">
              <div className="flex items-center justify-center h-[43px] w-[43px] rounded-[50%] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                <img src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/07/19/1244553-untitled-design-2023-07-19t181212.434.jpg?im=Resize=(400" className='w-[40px] h-[40px] object-cover rounded-[50%] border-2 border-white' alt="" />
              </div>
            </div>

            <h3 className=' font-semibold text-[16px] ml-1'>Mahdifarooqui  &#x2022; <span className=' text-slate-500 font-light'>5h</span></h3>
          </div>

          <i className='font-semibold text-[25px] cursor-pointer'><IoIosMore/></i>

        </div>

        <img className='postImg' src="https://images.unsplash.com/photo-1610056494052-6a4f83a8368c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="" />
        
        <div className="flex items-center justify-between mt-3 ">
         <div className="flex items-center gap-3">
          <i className='text-2xl cursor-pointer'><FaRegHeart /></i>
          <i className='text-2xl cursor-pointer'><FaRegComment /></i>
          <i className='text-2xl cursor-pointer'><SlCursor /></i>
         </div>
         <i className='text-3xl cursor-pointer'><MdOutlineBookmarkBorder/></i>
        </div>
        <p className='text-sm my-2 font-medium'>741,388 likes</p>
        <p className='text-[14px]'><span className='font-[550]'>mahdifarooqui</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident fugit quasi tempora doloribus dolorem laboriosam, magni perferendis!</p>

        <p className=' text-slate-500 text-[14px] mt-2 cursor-pointer font-light'>View all 13,345 comments</p>

        <input className='w-full focus:border-btnBg bg-transparent pt-[5px] pb-[10px] outline-none border-none border-b-2' type="text" placeholder="Add a comment..."/>
      </div>
    </>
  )
}

export default Post