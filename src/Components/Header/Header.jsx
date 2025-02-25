import React, { useState } from 'react'
import { IoCaretDown } from "react-icons/io5";
import "./Header.css"
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [dropDown, setDropDown]= useState(false)

    const navigate = useNavigate()

    const  handleHome=()=>{
        navigate("/")
     }
    const  handleAbout=()=>{
        navigate("/about_us")
     }
    const  handleProgram=()=>{
        navigate("/program")
     }
    const  handlegetInvolved=()=>{
        navigate("/Get_Involved")
     }
     const handleStudentRegister =()=>{
        navigate("/Student_signup")
     }
     const handleTeacherRegister =()=>{
        navigate("/Teacher_Signup")
     }
  return (
    <div className='Header_Body'>
      <div className="Header_Wrapper">
        <div className="logo_Holder">
            <img src="/logo.png" alt="" />
        </div>
        <div className="Texts">
            <h4 onClick={handleHome}>Home</h4>
            <h4 onClick={handleAbout}>About us</h4>
            <h4 onClick={handleProgram}>Program Overview</h4>
            <h4 onClick={handlegetInvolved}>Get Involved</h4>
            <div className="Directory" onClick={() => setDropDown((prev) => !prev)}>
                <p>Apply Now</p>
                <IoCaretDown 
                   style={{ transform: dropDown ? "rotate(180deg)" : "rotate(0deg)", transition: "0.8s ease" }}
               />
                {
                    dropDown? <div className="dropCard">
                        <button className="teacher" onClick={handleTeacherRegister}>As a teacher</button>
                        <button className="student" onClick={handleStudentRegister}>As a student</button>
                    </div>: null
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
