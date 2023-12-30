import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
  const[activeNav,setActiveNav]=useState('#');
  return (
   <nav>
    <a href="#" onClick={()=>setActiveNav('#')}
     className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
    <a href="#About" onClick={()=>setActiveNav('#about')}
     className={activeNav==='#About'?'active':''}><AiOutlineUser/></a>
    {/* <a href="#Experience" onClick={()=>setActiveNav('#Experience')}
     className={activeNav==='#experience'?'active':''}><BiBook/></a> */}
      <a href="#Tech" onClick={()=>setActiveNav('#Tech')}
     className={activeNav==='#Tech'?'active':''}><BiBook/></a>
    <a href="#Portfolio" onClick={()=>setActiveNav('#Portfolio')}
     className={activeNav==='#Portfolio'?'active':''}><RiServiceLine/></a>
    <a href="#Contact" onClick={()=>setActiveNav('#Contact')}
     className={activeNav==='#Footer'?'active':''}><BiMessageSquareDetail/></a>
   </nav>
  )
}

export default Nav
