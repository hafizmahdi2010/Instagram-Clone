import React from 'react'
import functions from '../functions/functions'

const Header = () => {
  
  let {toggleClass,addClass,removeClass} = functions()

  return (
    <>
      <header className='header flex items-center bg-[#FFFFFF] px-[150px] h-[70px] justify-between'>
        {/* <img src={require("../images/instaTextLogo.png")} className='w-[140px]' alt="" /> */}

        <div className="searchBox flex items-center bg-[#FAFAFA] w-[300px] rounded-lg h-[40px] " style={{ outline: "1.5px solid #ccc" }}>
          <i className="ri-arrow-left-s-line text-3xl lg:hidden sm:block"  onClick={()=>removeClass(".searchBox","active")}></i>
          <i className="ri-search-line text-lg lg:ml-2 sm:ml-0"></i>
          <input type="text" placeholder='Search Here...' className=' bg-transparent p-[5px] flex-1 outline-none bottom-0 h-full' />
        </div>

        <div className="icons lg:text-[28px] sm:text-[20px] flex items-center gap-[15px]">
        <div className='menuIcons flex items-center gap-[15px] lg:text-[28px] sm:text-[20px]'>
          <i className="ri-home-5-line cursor-pointer"></i>
          <i className="ri-compass-line cursor-pointer"></i>
          <i className="ri-heart-3-line cursor-pointer"></i>
          <img src={require("../images/profile-avatar.webp")} alt="" className="prifileHeader rounded-full w-10 cursor-pointer object-cover" />
        </div>
        </div>

        <div className='flex items-center gap-[10px] text-[25px]'>
          <i className="ri-search-line lg:hidden sm:block" onClick={()=>addClass(".searchBox","active")}></i>
          <i className="ri-menu-line lg:hidden sm:block" onClick={()=>toggleClass(".menuIcons","active")}></i>
        </div>

      </header>
    </>
  )
}

export default Header