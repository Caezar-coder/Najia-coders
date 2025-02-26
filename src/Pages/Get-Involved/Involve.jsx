import React from 'react'
import './Involve.css'
import { useNavigate } from 'react-router-dom'

const Involve = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="theHeaderPusher"></div>
    <div className='getInvolvePageWRapper'>
      <div className="getInvolvePageWRapperCover">
        <div className="getInvolvePageWRapperCoverTextWrapper">
        <h1>Want to Help with Instruction?</h1>
        <p>Join us as a Teaching Assistant Volunteer and make a difference!Support instructors,guide <br />
        learners,and gain valuable experience--all while giving back. <br />No prior teaching?No problem! If you're passionate about helping others learn, <br />
        we'd love to have you</p>
        

         <button className='teacherbtn' onClick={()=>navigate('/Teacher_Signup')}>Teaching Assistant Application</button>

        </div>


        <div className="getInvolvePageWRapperCoverTextWrapper">
          <h1>Transform lives with your support, together we can empower the next tech leaders!</h1>
          <p>Every contribution supports resources ,mentorshipand hands-on experience
            ,giving students the <br /> tools they need to succeed. <br /> Donate today and help shape the future of young innovators </p>

          <button className='teacherbtn1'>Donate</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Involve
