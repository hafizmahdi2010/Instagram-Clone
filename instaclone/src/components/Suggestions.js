import React from 'react'
import "../App.css"

const Suggestions = () => {
  return (
    <>
      <div className="suggestions w-[90%] h-[280px] mb-[30px]">

        <div className="flex items-center justify-between my-3">
          <h3 className=' text-slate-500 font-semibold'>Suggestions for you</h3>
          <a href="" className='text-[14px] font-[550] text-blue text-blue'>See All</a>
        </div>

        <div className="suggestionsCon flex items-center gap-[20px] w-full overflow-auto">

          <div  className="suggestUser min-w-[35%] rounded-lg h-[230px] border-[1.5px] cursor-pointer relative flex flex-col items-center justify-center border-[#ccc]">
          <i class="ri-close-line absolute text-[23px] top-[2%] right-[5%] text-slate-500"></i>
            <img className="user w-[60px] mb-[4] h-[60px] rounded-[50%]" src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt=""  />
            <h3 className='text-black text-[14px] mt-3 text-center'>Subuhm</h3>
            <p className='text-slate-500 text-[14px] mb-[10px]'>Follows you</p>
            <button className="instaBtnBlue">Follow</button>
          </div>

          <div  className="suggestUser min-w-[35%] rounded-lg h-[230px] border-[1.5px] cursor-pointer relative flex flex-col items-center justify-center border-[#ccc]">
          <i class="ri-close-line absolute text-[23px] top-[2%] right-[5%] text-slate-500"></i>
            <img className="user w-[60px] mb-[4] h-[60px] rounded-[50%]" src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt=""  />
            <h3 className='text-black text-[14px] mt-3 text-center'>Subuhm</h3>
            <p className='text-slate-500 text-[14px] mb-[10px]'>Follows you</p>
            <button className="instaBtnBlue">Follow</button>
          </div>

          <div  className="suggestUser min-w-[35%] rounded-lg h-[230px] border-[1.5px] cursor-pointer relative flex flex-col items-center justify-center border-[#ccc]">
          <i class="ri-close-line absolute text-[23px] top-[2%] right-[5%] text-slate-500"></i>
            <img className="user w-[60px] mb-[4] h-[60px] rounded-[50%]" src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt=""  />
            <h3 className='text-black text-[14px] mt-3 text-center'>Subuhm</h3>
            <p className='text-slate-500 text-[14px] mb-[10px]'>Follows you</p>
            <button className="instaBtnBlue">Follow</button>
          </div>

          <div  className="suggestUser min-w-[35%] rounded-lg h-[230px] border-[1.5px] cursor-pointer relative flex flex-col items-center justify-center border-[#ccc]">
          <i class="ri-close-line absolute text-[23px] top-[2%] right-[5%] text-slate-500"></i>
            <img className="user w-[60px] mb-[4] h-[60px] rounded-[50%]" src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt=""  />
            <h3 className='text-black text-[14px] mt-3 text-center'>Subuhm</h3>
            <p className='text-slate-500 text-[14px] mb-[10px]'>Follows you</p>
            <button className="instaBtnBlue">Follow</button>
          </div>

        </div>

      </div>
    </>
  )
}

export default Suggestions