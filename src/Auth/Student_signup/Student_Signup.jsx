import React, { useState } from "react";
import "./Student_signup.css";

const Student_Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    phone: "",
    address: "",
    camp: "",
    program: "",
    laptop: "",
    interest: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    validateField(e.target.name, e.target.value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    if (!value.trim()) {
      newErrors[name] = `${name.replace(/([A-Z])/g, " $1")} is required`;
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
  };

  return (
    <div className="signup-container-6">
      <div className="signup-box-6">
        <h2 style={{ color: "black", fontSize: "40px", textAlign: "center", paddingBottom: "25px" }}>
          Student Application
        </h2>
        <form className="signup-form-6">
        <div className="input-group-6">
  <label style={{ fontSize: "18px", fontWeight: "bold" }}>Full Name</label>
  <div className="name-fields-6">
    <div className="name-input-6">
      <input  type="text" name ="firstName"  style={{ fontSize: "14px" }}className="wide-input" placeholder="First Name" value={formData.firstName} onChange={handleChange} onBlur={handleBlur} />
      {errors.firstName && <p className="error">{errors.firstName}</p>}
    </div>
    <div className="name-input-6">
      <input type="text" name="lastName" className="wide-input" placeholder="Last Name" style={{ fontSize: "14px" }} value={formData.lastName} onChange={handleChange} onBlur={handleBlur} />
      {errors.lastName && <p className="error">{errors.lastName}</p>}
    </div>
  </div>
</div>


          <div className="input-group-6">
            <label style={{ fontSize: "18px", fontWeight: "bold" }}>Email</label>
            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} onBlur={handleBlur} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="input-group-6">
            <label style={{ fontSize: "18px", fontWeight: "bold" }}>Date of Birth</label>
            <input type="text" name="dateOfBirth" placeholder="DD/MM/YYYY" value={formData.dateOfBirth} onChange={handleChange} onBlur={handleBlur} />
            {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
          </div>

          <div className="input-group-6">
            <label style={{ fontSize: "18px", fontWeight: "bold" }}>Phone Number</label>
            <input type="text" name="phone" placeholder="080xxxxxxx" value={formData.phone} onChange={handleChange} onBlur={handleBlur} />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div className="input-group-6">
            <label style={{ fontSize: "18px", fontWeight: "bold" }}>Address</label>
            <input type="text" name="address" placeholder="1234 Street Name, City, State" value={formData.address} onChange={handleChange} onBlur={handleBlur} />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>

          <div className="input-group-6">
            <label style={{ fontSize: "18px", fontWeight: "bold" }}>Camp of Choice</label>
            <div className="checkbox-group-6">
              <label><input type="radio" name="camp" value="abuja" onChange={handleChange} /> Abuja</label>
              <label><input type="radio" name="camp" value="lagos" onChange={handleChange} /> Lagos</label>
            </div>
          </div>

          <div className="input-group-6">
            <label style={{ fontSize: "18px", fontWeight: "bold" }}>Program of Interest</label>
            <div className="checkbox-group-6">
              <label><input type="radio" name="program" value="python" onChange={handleChange} /> Fundamentals of Python Programming</label>
              <label><input type="radio" name="program" value="data-structures" onChange={handleChange} /> Data Structure & Algorithms Applied</label>
              <label><input type="radio" name="program" value="programming-data" onChange={handleChange} /> Programming & Data Concept</label>
            </div>
          </div>

          <div className="input-group-6">
            <label style={{ fontSize: "18px", fontWeight: "bold" }}>Do you own a laptop?</label>
            <div className="checkbox-group-6">
              <label><input type="radio" name="laptop" value="yes" onChange={handleChange} /> Yes</label>
              <label><input type="radio" name="laptop" value="no" onChange={handleChange} /> No</label>
            </div>
          </div>

          <div className="input-group-6">
            <label style={{ fontSize: "18px", fontWeight: "bold" }}>What interests you about this program?</label>
            <textarea className="textarea-input-6" name="interest" placeholder="Brief explanation why you want to join this program" value={formData.interest} onChange={handleChange} onBlur={handleBlur}></textarea>
            {errors.interest && <p className="error">{errors.interest}</p>}
          </div>

          <button type="submit" className="signup-button-6">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Student_Signup;
