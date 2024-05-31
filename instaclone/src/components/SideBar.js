import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';



const SideBar = () => {
  return (
    <>
      <div className="sideBar shadow-md bg-[#FFFFFF] p-[20px]">

        <img src={require("../images/instaTextLogo.png")} className='w-[140px]' alt="" />


        <Link to="/"><div className="sideBarLink mt-10">
          <i className="ri-home-4-line"></i> Home
        </div></Link>

        <Link to="/search"><div className="sideBarLink ">
          <i><CiSearch /></i> Search
        </div></Link>

        <div className="sideBarLink ">
          <i className="ri-compass-3-line"></i> Explore
        </div>

        <div className="sideBarLink ">
          <i><MdOutlineVideoCameraBack /></i> Reels
        </div>


        <div className="sideBarLink ">
          <i className="ri-messenger-line"></i> Messages
        </div>

        <div className="sideBarLink ">
          <i className="ri-notification-3-line"></i> Notification
        </div>

        <Link to="/create"><div className="sideBarLink ">
          <i className="ri-add-line"></i> Create
        </div></Link>

        <Link to="/profile"><div className="sideBarLink ">
          <img src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt="" className=" mr-2 rounded-full w-5 cursor-pointer object-cover" />
          Profile
        </div></Link>

        <div className="sideBarLink ">
        <i><IoMdMenu /></i> More
      </div>

      </div>

    


    </>
  )
}

export default SideBar