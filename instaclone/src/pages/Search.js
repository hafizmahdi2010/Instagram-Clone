import React, { useEffect } from 'react'
import SideBar from '../components/SideBar'
import { CiSearch } from 'react-icons/ci'
import Post from '../components/Post'
import { FaRegComment, FaRegHeart } from 'react-icons/fa6'
import { SlCursor } from 'react-icons/sl'
import { MdOutlineBookmarkBorder } from 'react-icons/md'
import { IoIosMore } from 'react-icons/io'

const Search = () => {

  useEffect(() => {
    let searchInput = document.querySelector('.searchBox>input');
    searchInput.focus()
  }, [])
  

  return (
    <>
      <div className="flex">
        <SideBar/>
        <div className="search pt-[50px]">

        <div className="searchBox flex items-center bg-slate-100 w-[40%] ml-[30px] ">
          <input type="text" placeholder='Search Here...' className='p-[10px] flex-1 bg-transparent outline-none border-0'/>
          <i className='text-xl mr-2 cursor-pointer font-semibold text-black'><CiSearch /></i>
        </div>

        <div className="searchPosts mt-[30px] ml-[30px] mb-5">

        <div className="searchPost">
         <img src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?cs=srgb&dl=pexels-pixabay-35967.jpg&fm=jpg" alt="" />
         <div className="postContent">
         <h3 className=' leading-[1]'>Car Of World <br /> </h3>
         <span className='text-slate-700 text-[14px] font-normal line-clamp-1 w-[100%]'>Code With Mahdi</span>
         </div>
        </div>

        <div className="searchPost">
         <img src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?cs=srgb&dl=pexels-pixabay-35967.jpg&fm=jpg" alt="" />
         <div className="postContent">
         <h3 className=' leading-[1]'>Car Of World <br /> </h3>
         <span className='text-slate-700 text-[14px] font-normal line-clamp-1 w-[100%]'>Code With Mahdi</span>
         </div>
        </div>

        <div className="searchPost">
         <img src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?cs=srgb&dl=pexels-pixabay-35967.jpg&fm=jpg" alt="" />
         <div className="postContent">
         <h3 className=' leading-[1]'>Car Of World <br /> </h3>
         <span className='text-slate-700 text-[14px] font-normal line-clamp-1 w-[100%]'>Code With Mahdi</span>
         </div>
        </div>

        <div className="searchPost">
         <img src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?cs=srgb&dl=pexels-pixabay-35967.jpg&fm=jpg" alt="" />
         <div className="postContent">
         <h3 className=' leading-[1]'>Car Of World <br /> </h3>
         <span className='text-slate-700 text-[14px] font-normal line-clamp-1 w-[100%]'>Code With Mahdi</span>
         </div>
        </div>

        
       
        </div>
        </div>

        </div>
    </>
  )
}

export default Search