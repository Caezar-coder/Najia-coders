import React, { useState } from "react";
import "../../Auth/Teacher_Signup/Teacher_Signup.css";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Aplication_Popup from "../../Components/application_popup/Aplication_Popup";

const Teacher_Signup = () => {
  const navigate = useNavigate();
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [volunteering, setVolunteering] = useState("");
  const [popup, setPopup] = useState(false);

  const [userInputs, setUserinputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  console.log(userInputs);

  const handleSubmit = () => {
    if (
      !userInputs.firstName &&
      !userInputs.lastName &&
      !userInputs.email &&
      !userInputs.phoneNumber &&
      !userInputs.address
    ) {
      setPopup(false);
    } else setPopup(true);
  };

  return (
    <>
      {/* <div className="theHeaderPusher"></div> */}
      <div className="teachersignwrap">
        <div className="teachersignupname">
          <HiArrowLeft onClick={() => navigate("/Get_Involved")} />
          <h1>Teaching Assistant Application</h1>
        </div>
        <div className="teachersignupforms">
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
                  onChange={(e) =>
                    setUserinputs((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                  value={userInputs.firstName}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="namesbtn"
                />
              </div>
            </div>

            <div className="email">
              <label>Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="emailsbtn"
                onChange={(e) =>
                  setUserinputs((prev) => ({ ...prev, email: e.target.value }))
                }
                value={userInputs.email}
              />
            </div>

            <div className="email">
              <label>Phone Number</label>
              <input
                type="number"
                placeholder="080xxxxxxx"
                className="emailsbtn"
                onChange={(e) =>
                  setUserinputs((prev) => ({
                    ...prev,
                    phoneNumber: e.target.value,
                  }))
                }
                value={userInputs.phoneNumber}
              />
            </div>

            <div className="email">
              <label>Address</label>
              <input
                type="text"
                placeholder="1234 Street name,City,State"
                className="emailsbtn"
                onChange={(e) =>
                  setUserinputs((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
                value={userInputs.address}
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
                  <input
                    type="radio"
                    name="qualification"
                    value="OND/Advanced Diploma"
                    checked={education === "OND/Advanced Diploma"}
                    onChange={(e) => setEducation(e.target.value)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="custom-radio">
                  HND/BSC
                  <input
                    type="radio"
                    name="qualification"
                    value="HND/Bsc"
                    checked={education === "HND/Bsc"}
                    onChange={(e) => setEducation(e.target.value)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="custom-radio">
                  MSC/PhD
                  <input
                    type="radio"
                    name="qualification"
                    value="Msc/PhD"
                    checked={education === "Msc/PhD"}
                    onChange={(e) => setEducation(e.target.value)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>

            <div className="qualification">
              <span>Year of Experience</span>
              <div>
                <label className="experience">
                  0-2Yrs
                  <input
                    type="radio"
                    name="experience"
                    value="0 - 2yrs"
                    checked={experience === "0 - 2yrs"}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="experience">
                  3-5Yrs
                  <input
                    type="radio"
                    name="experience"
                    value="3 - 5yrs"
                    checked={experience === "3 - 5yrs"}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="experience">
                  5Yrs+
                  <input
                    type="radio"
                    name="experience"
                    value="5yrs+"
                    checked={experience === "5yrs+"}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>

            <div className="qualification">
              <span>Volunteering period</span>
              <div>
                <label className="volunteering">
                  3-6 months
                  <input
                    type="radio"
                    name="volunteering"
                    value="3 - 6 months"
                    checked={volunteering === "3 - 6 months"}
                    onChange={(e) => setVolunteering(e.target.value)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="volunteering">
                  6 months - 1 year
                  <input
                    type="radio"
                    name="volunteering"
                    value="3 - 6 months"
                    checked={volunteering === "3 - 6 months"}
                    onChange={(e) => setVolunteering(e.target.value)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="volunteering">
                  1 yr - 2 yrs+
                  <input
                    type="radio"
                    name="volunteering"
                    value="1 yr - 2 yrs+"
                    checked={volunteering === "1 yr - 2 yrs+"}
                    onChange={(e) => setVolunteering(e.target.value)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>

              <div className="language">
                <label>
                  Which programing language and tools do you have experience
                  with
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
                  <span className="submittext" onClick={handleSubmit}>
                    Submit
                  </span>
                </button>
              </div>
              <Aplication_Popup open={popup} onClose={() => setPopup(false)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher_Signup;
