import React from "react";
import "./Student_signup.css";

const Student_Signup = () => {
  return (
    <div className="signup-container-6">
      <div className="signup-box-6">
        <h2>Student Application</h2>
        <form className="signup-form-6">
          <div className="input-groupfull-name-6">
            <label>Full Name</label>
            <div className="name-fields-6">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="input-group-6">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group-6">
            <label>Date of Birth</label>
            <input type="text" placeholder="DD/MM/YYYY" />
          </div>
          <div className="input-group-6">
            <label>Phone Number</label>
            <input type="text" placeholder="080xxxxxxx" />
          </div>

          <div className="input-group-6">
            <label>Address</label>
            <input type="text" placeholder="1234 Street Name, City, State" />
          </div>

          <div className="input-group-6">
            <label>Camp of Choice</label>
            <div className="checkbox-group-6">
              <label>
                <input type="radio" name="camp" value="abuja" /> Abuja
              </label>
              <label>
                <input type="radio" name="camp" value="lagos" /> Lagos
              </label>
            </div>
          </div>
          <div className="input-group-6">
            <label>Program of Interest</label>
            <div className="checkbox-group-6">
              <label>
                <input type="radio" name="program" value="python" />{" "}
                Fundamentals of Python Programming
              </label>
              <label>
                <input type="radio" name="program" value="data-structures" />{" "}
                Data Structure & Algorithms Applied{" "}
              </label>
              <label>
                <input type="radio" name="program" value="programming-data" />{" "}
                Programming & Data Concept{" "}
              </label>
            </div>
          </div>
          <div className="input-group-6">
            <label>Do you own a laptop?</label>
            <div className="checkbox-group-6">
              <label>
                <input type="radio" name="laptop" value="yes" /> Yes
              </label>
              <label>
                <input type="radio" name="laptop" value="no" /> No
              </label>
            </div>
          </div>
          <div className="input-group-6">
            <label>What interests you about this program?</label>
            <textarea
              className="textarea-input-6"
              placeholder="Brief explanation why you want to join this program"
            ></textarea>
          </div>
          <button type="submit" className="signup-button-6">
            Submit
          </button>
        </form>
      </div>

      <div>
        <div className="input-group-6">
          <label>What interests you about this program?</label>
          <textarea
            className="textarea-input-6"
            placeholder="Brief explanation why you want to join this program"
          ></textarea>
        </div>
        <button type="submit" className="signup-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Student_Signup;
