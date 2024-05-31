import React, { useState } from 'react'
import Sidebar from "../components/SideBar"
import { MdGridOn, MdOutlineVideoCameraBack } from 'react-icons/md'
import { FiBookmark } from 'react-icons/fi'
import { LuUserSquare2 } from 'react-icons/lu'

const Profiile = () => {

  const [content, setContent] = useState("posts");

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="profile">

          <div className="flex w-[80%] mx-auto  h-[300px] items-center">
            <img className='w-[150px] h-[150px] rounded-[50%] cursor-pointer' src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt="" />

            <div className="profileDeatils h-[60%]">

              <div className="flex items-center ml-[50px] gap-[10px]">
                <h3 className='text-lg'>upvox..</h3>
                <div className="btnGray">Edit profile</div>
                <div className="btnGray">Add tools</div>
                <i class="ri-settings-5-line text-[30px] cursor-pointer"></i>
              </div>

              <div className="flex items-center justify-between w-[40%] mt-7 ml-[50px]">
                <p><span className=' font-semibold'>11</span> posts</p>
                <p><span className=' font-semibold'>41</span> followers</p>
                <p><span className=' font-semibold'>32</span> following</p>
              </div>

              <div className="ml-[50px]">
                <p className='text-black text-[14px] font-semibold w-[50%] line-clamp-1 mt-5'>Upvox</p>
                <p className='text-[14px] text-slate-500 '>Product/services</p>
                <p className=' line-clamp-3 text-[14px] w-[70%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sapiente earum neque libero blanditiis. Inventore cum tempore deleniti molestiae mollitia fuga, dicta optio labore dolores totam, impedit quidem quia neque amet maxime sapiente ullam numquam, eius aspernatur. Numquam sint molestias distinctio eligendi ipsa vel cupiditate aut ab quo aliquam. Laudantium, culpa libero. Quod, necessitatibus!</p>
              </div>

            </div>

          </div>


          <div className="tabs p-0 flex justify-center gap-[40px] w-[90%] mx-auto my-[3] mb-[20px] h-11 border-t-2 boredr-[#ccc]">
            <p onClick={() => setContent("posts")} className={`flex items-center cursor-pointer text-[16px] text-slate-500 ${content === "posts" ? "active" : ""}`}><MdOutlineVideoCameraBack /> &nbsp; <span className=' text-[14px]'>POSTS</span></p>
            <p onClick={() => setContent("reels")} className={`flex items-center cursor-pointer text-[16px] text-slate-500 ${content === "reels" ? "active" : ""}`}><MdGridOn /> &nbsp; <span className=' text-[14px]'>REELS</span></p>
            <p onClick={() => setContent("saved")} className={`flex items-center cursor-pointer text-[16px] text-slate-500 ${content === "saved" ? "active" : ""}`}><FiBookmark /> &nbsp; <span className=' text-[14px]'>SAVED</span></p>
            <p onClick={() => setContent("tagged")} className={`flex items-center cursor-pointer text-[16px] text-slate-500 ${content === "tagged" ? "active" : ""}`}><LuUserSquare2 /> &nbsp; <span className=' text-[14px]'>TAGGED</span></p>
          </div>

          <div className="content">

            {
              content === "posts" ?
                <>
                  <div className="post">
                    <img src="https://cdn.motor1.com/images/mgl/ZnmO23/s1/future-cars-2023-2026.jpg" alt="" />
                  </div>

                  <div className="post">
                    <img src="https://cdn.motor1.com/images/mgl/ZnmO23/s1/future-cars-2023-2026.jpg" alt="" />
                  </div>

                  <div className="post">
                    <img src="https://cdn.motor1.com/images/mgl/ZnmO23/s1/future-cars-2023-2026.jpg" alt="" />
                  </div>

                  <div className="post">
                    <img src="https://cdn.motor1.com/images/mgl/ZnmO23/s1/future-cars-2023-2026.jpg" alt="" />
                  </div>
                </> : content === "reels" ?
                  <>
                    <div className="reelsCon">
                      <h3 className='text-3xl mb-5 text-black'>Reels</h3>

                      <div className="reels">

                        <div className="reel">
                          <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                          <div className="reelContent pl-3 flex items-center">
                            <img className='w-[40px] h-[40px] rounded-[50%] object-cover' src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt="" />
                            <div>
                              <h3 className='w-full line-clamp-1 text-white text-[14px] font-semibold ml-2'>upvox...</h3>
                              <p className='text-[14px] text-gray-500 ml-2'>12/3/2023</p>
                            </div>

                          </div>
                        </div>

                        <div className="reel">
                          <img src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                          <div className="reelContent pl-3 flex items-center">
                            <img className='w-[40px] h-[40px] rounded-[50%] object-cover' src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt="" />
                            <div>
                              <h3 className='w-full line-clamp-1 text-white text-[14px] font-semibold ml-2'>upvox...</h3>
                              <p className='text-[14px] text-slate-500 ml-2'>12/3/2023</p>
                            </div>

                          </div>
                        </div>

                        <div className="reel">
                          <img src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                          <div className="reelContent pl-3 flex items-center">
                            <img className='w-[40px] h-[40px] rounded-[50%] object-cover' src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt="" />
                            <div>
                              <h3 className='w-full line-clamp-1 text-white text-[14px] font-semibold ml-2'>upvox...</h3>
                              <p className='text-[14px] text-slate-500 ml-2'>12/3/2023</p>
                            </div>

                          </div>
                        </div>


                        <div className="reel">
                          <img src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                          <div className="reelContent pl-3 flex items-center">
                            <img className='w-[40px] h-[40px] rounded-[50%] object-cover' src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt="" />
                            <div>
                              <h3 className='w-full line-clamp-1 text-white text-[14px] font-semibold ml-2'>upvox...</h3>
                              <p className='text-[14px] text-slate-500 ml-2'>12/3/2023</p>
                            </div>

                          </div>
                        </div>

                        <div className="reel">
                          <img src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                          <div className="reelContent pl-3 flex items-center">
                            <img className='w-[40px] h-[40px] rounded-[50%] object-cover' src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt="" />
                            <div>
                              <h3 className='w-full line-clamp-1 text-white text-[14px] font-semibold ml-2'>upvox...</h3>
                              <p className='text-[14px] text-slate-500 ml-2'>12/3/2023</p>
                            </div>

                          </div>
                        </div>

                        <div className="reel">
                          <img src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                          <div className="reelContent pl-3 flex items-center">
                            <img className='w-[40px] h-[40px] rounded-[50%] object-cover' src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt="" />
                            <div>
                              <h3 className='w-full line-clamp-1 text-white text-[14px] font-semibold ml-2'>upvox...</h3>
                              <p className='text-[14px] text-slate-500 ml-2'>12/3/2023</p>
                            </div>

                          </div>
                        </div>
                      </div>


                    </div>
                  </> : content === "saved" ?
                    <>
                      <div className="savedPosts">

                        <h3 className='text-3xl mb-5 text-black'>Saved Posts</h3>

                        <div className="saved">

                          <div className="post">
                            <img src="https://cdn.motor1.com/images/mgl/ZnmO23/s1/future-cars-2023-2026.jpg" alt="" />
                          </div>

                          <div className="post">
                            <img src="https://cdn.motor1.com/images/mgl/ZnmO23/s1/future-cars-2023-2026.jpg" alt="" />
                          </div>

                          <div className="post">
                            <img src="https://cdn.motor1.com/images/mgl/ZnmO23/s1/future-cars-2023-2026.jpg" alt="" />
                          </div>

                          <div className="post">
                            <img src="https://cdn.motor1.com/images/mgl/ZnmO23/s1/future-cars-2023-2026.jpg" alt="" />
                          </div>

                        </div>
                      </div>


                    </> : content === "tagged" ?
                      <>
                        <div className="tagged"></div>
                      </> : "Nothing !"
            }



          </div>

        </div>
      </div>
    </>
  )
}

export default Profiile