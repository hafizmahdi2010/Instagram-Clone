import React from 'react'

const SignUp = () => {


  return (
    <>
   <div className="container bg-[#F9FAFB]">
    <div className="left ml-[5%] w-[50%] h-full flex justify-center">
      <img src={require("../images/mobile_3d.png")} alt="" className='' />
    </div>
    <div className="right w-[40%] flex justify-center">
      
      <div className="form w-[65%] rounded-lg h-[80vh] bg-black">
        <img src={require("../images/instaTextLogo.png")} className='w-[150px] self-center mb-5' alt="" />


        <label htmlFor="username">Username</label>
        <div className="formInputCon">
        <input type="text" placeholder='Enter Your Username' className='formInput' id='username' name='username'/>
        </div>
        <label htmlFor="email">Email</label>
        <div className="formInputCon">
        <input type="email" placeholder='Enter Your Email' className='formInput' id='email' name='email'/>
        </div>

        <label htmlFor="number">Number</label>
        <div className="formInputCon">
        <input type="number" placeholder='Enter Your Number' className='formInput' id='number' name='number'/>
        </div>

        <label htmlFor="username">Password</label>
        <div className="formInputCon">
        <input autocomplete="new-password" type="password" placeholder='Enter Your Passowrd' className='formInput' id='password' name='password'/>
        </div>

        <button className="btn-login">Sign Up</button>
      </div>

    </div>
   </div>
    </>
  )
}

export default SignUp