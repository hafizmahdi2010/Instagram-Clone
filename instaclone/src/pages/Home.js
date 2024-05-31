import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import PostsContainer from '../components/PostsContainer'
import HomeRightSide from "../components/HomeRightSide"

const Home = () => {
  return (
    <>
    <div className="flex">
      <SideBar/>
      <PostsContainer/>
      <HomeRightSide/>
      {/* <Header/> */}
    </div>
    </>
  )
}

export default Home