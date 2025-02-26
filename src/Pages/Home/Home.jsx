import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import './home.css'

const Home = () => {
  return (
    <div className='homebody'>
     <div className='sec1'>
      <h1><b>Learn to code, Build Your Future.</b></h1>
      <p>NaijaCoder organizes a free, intensive program in Nigeria to teach the basics of algorithms and Computer programming to high schoolers. The program also provide resources for students applying to universities abroad.<br/> Programming offers these students, especially those from indigent backgrounds, an opportunity to learn profitable skills and ignite their passions for problem-solving and critical thinking.</p>
      <button style={{
        padding: '10px 30px',
        margin: '10px',
        borderRadius: '37px',
        border: '4px solid green',
        color: 'green',
        textDecoration: 'none',
      }}>Learn more</button>

      <button style={{
        padding: '10px 30px',
        margin: '10px',
        borderRadius: '37px',
         backgroundColor: 'rgb(13, 39, 13)',
        color:'white',
        textDecoration: 'none'
      }}>Apply Now</button>
     </div>

     <div className='sec2'>
     <img src='\Group 140.png' />

     <div className='sec2img'>
     <img src='\pexels-ron-lach-9783812.jpg' />
     <p>providing free instructions on basics of algorithms</p>
     </div>

      <img style={{
        height: '180px'
      }} src='\hackerBg.jpeg' />

      <div className='sec2img'>
      <img src='\pexels-tonyzebastian-10011662 (1).jpg' />
      <p>providing free instructions on basics of algorithms</p>
      </div>

     <img src='\Group 141.png' />
      {/* <img src='\public\images\pexels-tonyzebastian-10011662.jpg' /> */}
      
      
     </div>

     <div className='sec3'>
      <h2><b>Our Supporters</b></h2>
      <div className='supporters'>
       <img src='\mastercard.jpeg'  alt='mastercard'/>
       <img src='\simonsFoundation.png' alt='SimonsFoundation'/>
       <img src='\Berkeley.png' alt='Berkeley' />
       <img src='/mercatus.png' alt='mercatus'/>
      
      </div>
      
     </div>

     <div className='sec4'>
      <h3>Our Gallery</h3>

      <div className='gallery'>
      <img src='\WhatsApp Image 2025-02-25 at 14.38.15_0e404587.jpg' />
      <div className='imgBody'>
      <img src='\WhatsApp Image 2025-02-25 at 14.52.29_cfa199ef.jpg' />
      <img src='\WhatsApp Image 2025-02-25 at 14.41.53_832e0478.jpg' />
      </div>
       <img src='\WhatsApp Image 2025-02-25 at 14.38.15_871409e4.jpg' />
      
      </div>
      <button> See More <IoIosArrowRoundForward size={70} /></button>
     </div>

    </div>
  )
}

export default Home