import React from 'react'
import '../../Auth/Teacher_Signup/Teacher_Signup.css'
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

const Teacher_Signup = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="theHeaderPusher"></div>
    <div className='teachersignwrap'>
      <div className='teachersignupname'>
        <HiArrowLeft onClick={()=>navigate('/Get_Involved')}/>
      <h1>Teaching Assistant Application</h1>
      </div>
      <div className='teachersignupforms'>
        <div className='firstndlast'>
          <div className="inputNames">
          <label >Full Name</label>
          
          </div>
          <input type="text" placeholder='First name' className='namesbtn' />
          <input type="text" placeholder='Last name' className='namesbtn' />
        </div>

        <div className='email'>
          <label>Email</label>
          <input type="email" placeholder='example@email.com' className='emailsbtn' />
        </div>

        <div className='email'>
          <label >Phone Number</label>
          <input type="number" placeholder='080xxxxxxx' className='emailsbtn' />
        </div>

        <div className='email'>
          <label >Address</label>
          <input type="text" placeholder='1234 Street name,City,State' className='emailsbtn' />
        </div>

        <div className='email'>
          <label >GitHub Link(If available)</label>
          <input type="url" placeholder='https://github.com/username/repository' className='emailsbtn' />
        </div>
      </div>
    </div>
    </>
  )
}

export default Teacher_Signup
