import React from "react";
import "../../Auth/Teacher_Signup/Teacher_Signup.css";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Teacher_Signup = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="teachersignwrap">
        <div className="teachersignupname">
          <HiArrowLeft
            size={30}
            style={{ color: "#048c63" }}
            onClick={() => navigate("/Get_Involved")}
          />
          <h1>Teaching Assistant Application</h1>
        </div>
        <div className="teachersignupforms">
          <div className="firstndlast">
            <div className="inputNames">
              <label>Full Name</label>
            </div>
            <div className="nameinput">
              <input
                type="text"
                placeholder="First name"
                className="namesbtn"
              />
              <input type="text" placeholder="Last name" className="namesbtn" />
            </div>
          </div>

          <div className="email">
            <label>Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="emailsbtn"
            />
          </div>

          <div className="email">
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="080xxxxxxx"
              className="emailsbtn"
            />
          </div>

          <div className="email">
            <label>Address</label>
            <input
              type="text"
              placeholder="1234 Street name,City,State"
              className="emailsbtn"
            />
          </div>

          <div className="email">
            <label>GitHub Link(If available)</label>
            <input
              type="url"
              placeholder="https://github.com/username/repository"
              className="emailsbtn"
            />
          </div>
          <div className="qualification">
            <span>Educational Qualification</span>
            <div className="qualificationdiv">
              <label className="custom-radio">
                OND/Advanced Diploma
                <input type="radio" name="qualification" value="ond" />
                <span className="checkmark"></span>
              </label>
              <label className="custom-radio">
                HND/BSC
                <input type="radio" name="qualification" value="bsc" />
                <span className="checkmark"></span>
              </label>
              <label className="custom-radio">
                MSC
                <input type="radio" name="qualification" value="msc" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>

          <div className="qualification">
            <span>Year of Experience</span>
            <div>
              <label className="experience">
                0-2Yrs
                <input type="radio" name="experience" value="years" />
                <span className="checkmark"></span>
              </label>
              <label className="experience">
                3-5Yrs
                <input type="radio" name="experience" value="years" />
                <span className="checkmark"></span>
              </label>
              <label className="experience">
                5Yrs+
                <input type="radio" name="experience" value="years" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>

          <div className="qualification">
            <span>Volunteering period</span>
            <div>
              <label className="volunteering">
                3-5 months
                <input type="radio" name="volunteering" value="years" />
                <span className="checkmark"></span>
              </label>
              <label className="volunteering">
                6 months - 1 year
                <input type="radio" name="volunteering" value="years" />
                <span className="checkmark"></span>
              </label>
              <label className="volunteering">
                1 yr - 2 yrs+
                <input type="radio" name="volunteering" value="years" />
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="language">
              <label>
                Which programing language and tools do you have experience with
              </label>
              <input
                type="text"
                placeholder="Ex. Frontend - Recat, Node.js, Django, SQL, AWS"
                className="emailsbtn"
              />
            </div>

            <div className="motivation">
              <label>Which motivates you?</label>
              <textarea
                type="text"
                placeholder="Briefly tell us your motivation for applying for this role"
                className="textArea"
              />
            </div>

            <div className="submitdiv">
              <button className="submitbtn">
                <span className="submittext">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher_Signup;
