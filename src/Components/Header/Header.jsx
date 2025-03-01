import React, { useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { CgMenuBoxed } from "react-icons/cg";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
    setMenuOpen(false);
  };
  const handleAbout = () => {
    navigate("/about_us");
    setMenuOpen(false);
  };
  const handleProgram = () => {
    navigate("/program");
    setMenuOpen(false);
  };
  const handlegetInvolved = () => {
    navigate("/Get_Involved");
    setMenuOpen(false);
  };
  const handleStudentRegister = () => {
    navigate("/Student_signup");
    setMenuOpen(false);
  };
  const handleTeacherRegister = () => {
    navigate("/Teacher_Signup");
    setMenuOpen(false);
  };
  return (
    <div className="Header_Body">
      <div className="Header_Wrapper">
        <div className="logo_Holder">
          <img src="/logo.png" alt="" />
        </div>

        <div
          lassName="manu-icondiv"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <CgMenuBoxed size={50} className="manu-icon" />
          {menuOpen ? (
            <div className="mobile-menu">
              <h4 className="nav" onClick={handleHome}>
                Home
              </h4>
              <h4 className="nav1" onClick={handleAbout}>
                About us
              </h4>
              <h4 className="nav3" onClick={handleProgram}>
                Program Overview
              </h4>
              <h4 className="nav4" onClick={handlegetInvolved}>
                Get Involved
              </h4>
              <h4 className="nav5" onClick={handlegetInvolved}>
                Apply Now
              </h4>
            </div>
          ) : null}
        </div>
        <div className="Texts">
          <h4 onClick={handleHome}>Home</h4>
          <h4 style={{ color: "#048c63" }} onClick={handleAbout}>
            About us
          </h4>
          <h4 onClick={handleProgram}>Program Overview</h4>
          <h4 onClick={handlegetInvolved}>Get Involved</h4>
          <div
            className="Directory"
            onClick={() => setDropDown((prev) => !prev)}
          >
            <p>Apply Now</p>
            <IoCaretDown
              style={{
                transform: dropDown ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.8s ease",
              }}
            />
            {dropDown ? (
              <div className="dropCard">
                <button className="teacher" onClick={handleTeacherRegister}>
                  As a teacher
                </button>
                <button className="student" onClick={handleStudentRegister}>
                  As a student
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
