import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css"
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import "./styles/tablet.css"
import "./styles/mobile.css"
import Profile from './pages/Profile';
import Search from './pages/Search';
import Create from './pages/Create';

const App = () => {
  return (
    <>
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/search' element={<Search />} />
          <Route path='/create' element={<Create />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App