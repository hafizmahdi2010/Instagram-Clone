import React, { useState } from 'react'
import functions from '../functions/functions'
import SideBar from '../components/SideBar'

const Create = () => {
  let {clickable} = functions();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // errors

  const [titleErr, setTitleErr] = useState("");
  const [descErr, setDescErr] = useState("");

  const submitForm = () => {
    if(title === ""){
      setTitleErr("Title Is Required !");
    }
    else if(desc === ""){
      setTitleErr("");
      setDescErr("Description Is Required");
    }
    else{
      alert("submiting...");
      setTitleErr("");
      setDescErr("");

      setTitle("");
      setDesc("");
    }
  }

  return (
    <>
      <div className="flex">
        <SideBar/>
        <div className="create">
          <h3 className='text-black text-[25px] border-b-2 w-[90%] border-b-[#ccc]'>Create New <span className='text-btnBg'>Post</span></h3>
        
          <div className="createPageForm w-[90%] mt-5">
            
            <div className='flex flex-col w-[100%]'>
              <label htmlFor="title">Title</label>
              <input value={title} onChange={(e)=>setTitle(e.target.value)} name='title' id='title' className='formInput p-[10px] pl-0 bottom-0 border-b-2 outline-none border-b-[#ccc] focus:border-b-btnBg hover:border-b-btnBg' type="text" placeholder='Enter your post title'/>
            </div>

            <span className="error">{titleErr}</span>

            <div className='flex flex-col w-[100%] mt-3'>
              <label htmlFor="description">Description</label>
              <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} name='description' id='description' className='formInput pl-0 p-[10px] bottom-0 border-b-2 outline-none border-b-[#ccc] min-h-10  focus:border-b-btnBg hover:border-b-btnBg' type="text" placeholder='Enter your post description'></textarea>
            </div>

            <span className="error">{descErr}</span>


            <input className='socialFileInput' type="file" accept='.png, .jpg, .jpeg , .webp, .mp3, .mp4' hidden />

            <div onClick={()=>clickable(".socialFileInput")} className="uploadSocial w-[70%] h-[400px] bg-slate-200  rounded-lg mt-4 cursor-pointer flex items-center flex-col justify-center">
              <img src={require("../images/upload.png")} alt="" />
              <h3 className='text-[21px] -mt-7 italic text-black'>Upload File <span className='font-semibold'>Image/Video</span></h3>
            </div>

            <div className="btn uploadPost" onClick={submitForm}>Upload</div>

          </div>
        
        </div>
      </div>
    </>
  )
}

export default Create