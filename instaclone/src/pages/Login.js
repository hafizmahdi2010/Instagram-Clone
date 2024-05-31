import React from 'react'

const Login = () => {
  return (
    <>
      <div className="container bg-[#F9FAFB]">
        <div className="form w-[25%] h-[70vh] rounded-lg shadow-lg p-20">
          <img src={require("../images/instaTextLogo.png")} className='w-[50%] self-center mb-5' alt="" />

          <label htmlFor="username">Username</label>
          <div className="formInputCon">
            <input type="text" autoComplete='false' placeholder='Enter Your Username' className='formInput' id='username' name='username' />
          </div>

          <label htmlFor="username">Password</label>
          <div className="formInputCon">
            <input autocomplete="new-password" type="password" placeholder='Enter Your Passowrd' className='formInput' id='password' name='password' />
          </div>

          <button className="btn-login mt-10">Login</button>


        </div>
      </div>
    </>
  )
}

export default Login