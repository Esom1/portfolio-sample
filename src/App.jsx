import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Navbars from './layout/Navbars';
import Home from './pages/Home';
import Projects from './pages/Projects';
import DownloadResume from './pages/DownloadResume';
import Contact from './pages/Contact';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbars/>
    <Routes>
    <Route index element={<Home/>}/>
     <Route path='/Projects' element = {<Projects/>}/>
      <Route path='/DownloadResume' element = {<DownloadResume/>}/>
       <Route path='/Contact' element = {<Contact/>}/>
    </Routes>

    </BrowserRouter>
     
    </>
  )
}

export default App
