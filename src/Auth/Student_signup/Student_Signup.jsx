import React from 'react'

const Student_Signup = () => {
  return (
    <div className="signup-container">
    <div className="signup-box">
      <h2 style={{ color: "black", fontSize: "40px", textAlign: "center", paddingBottom: "25px" }}>Student Application</h2>
      <form className="signup-form">
        <div className="input-group full-name">
          <label>Full Name</label>
          <div className="name-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <label>Date of Birth</label>
          <input type="text" placeholder="DD/MM/YYYY" />
        </div>
        <div className="input-group">
          <label>Phone Number</label>
          <input type="text" placeholder="080xxxxxxx" />
        </div>
        <div className="input-group">
          <label>Address</label>
          <input type="text" placeholder="1234 Street Name, City, State" />
        </div>
        
        <div className="input-group">
          <label>Camp of Choice</label>
          <div className="checkbox-group">
            <label><input type="radio" name="camp" value="abuja" /> Abuja</label>
            <label><input type="radio" name="camp" value="lagos" /> Lagos</label>
          </div>
        </div>
        <div className="input-group">
          <label>Program of Interest</label>
          <div className="checkbox-group">
            <label><input type="radio" name="program" value="python" /> Fundamentals of Python Programming</label>
            <label><input type="radio" name="program" value="data-structures" /> Data Structure & Algorithms Applied </label>
            <label><input type="radio" name="program" value="programming-data" /> Programming & Data Concept     </label>
          </div>
        </div>
        <div className="input-group">
          <label>Do you own a laptop?</label>
          <div className="checkbox-group">
            <label><input type="radio" name="laptop" value="yes" /> Yes</label>
            <label><input type="radio" name="laptop" value="no" /> No</label>
          </div>
        </div>
        <div className="input-group">
          <label>What interests you about this program?</label>
          <textarea className="textarea-input" placeholder="Brief explanation why you want to join this program" ></textarea>
        </div>
        <button type="submit" className="signup-button">Submit</button>
      </form>
    </div>
   
  </div>
  )
}

export default Student_Signup
