import React from 'react'
import Users from './Users'
import Post from './Post'

const PostsContainer = () => {
  return (
    <>
      <div className="postsContainer">
        {/* <div className="uploadReel transition-all hover:bg-slate-200">
        <i className="ri-upload-line text-2xl mr-3 p-2 rounded-[50%] hover:bg-blue-100 w-15 h-15"></i>
        <h3 className="text-xl font-semibold">Upload A Reel</h3>
        </div> */}

        <Users/>
        <div className="posts">
        <Post/>
        </div>
      </div>
    </>
  )
}

export default PostsContainer