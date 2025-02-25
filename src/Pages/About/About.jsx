import React from "react";
import "./About.css";

const About = () => {
  const data = [
    {
      title: "Empowering Youth",
      content:
        "NaijaCoder is dedicated to equipping young individuals with valuable coding skills, providing them with tools to build a better future.",
      img: "/public/round check mark yellow.png",
    },
    {
      title: "Empowering Youth",
      content:
        "NaijaCoder is dedicated to equipping young individuals with valuable coding skills, providing them with tools to build a better future.",
      img: "/public/round check mark yellow.png",
    },
    {
      title: "Empowering Youth",
      content:
        "NaijaCoder is dedicated to equipping young individuals with valuable coding skills, providing them with tools to build a better future.",
      img: "/public/round check mark yellow.png",
    },
    {
      title: "Empowering Youth",
      content:
        "NaijaCoder is dedicated to equipping young individuals with valuable coding skills, providing them with tools to build a better future.",
      img: "/public/round check mark yellow.png",
    },
    {
      title: "Empowering Youth",
      content:
        "NaijaCoder is dedicated to equipping young individuals with valuable coding skills, providing them with tools to build a better future.",
      img: "/public/round check mark yellow.png",
    },
    {
      title: "Empowering Youth",
      content:
        "NaijaCoder is dedicated to equipping young individuals with valuable coding skills, providing them with tools to build a better future.",
      img: "/public/round check mark yellow.png",
    },
  ];
  return (
    <div className="About_Body">
      <div className="About_content">
        <div className="about_heroSection">
          <div className="hero_text">
            <h2>EMPOWERING THE NEXT GENERATION OF TECH INNOVATORS </h2>
            <p>
              NaijaCoder is a nonprofit organization committed to equipping
              young individuals with coding skills through accessible education
              and mentorship.{" "}
            </p>
          </div>
          <div className="hero_image">
            <div className="img_container">
              <img src="/hero_image.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section_two">
          <div className="section_text">
            <h4>WHY CHOOSE NAIJACODER</h4>
          </div>
          <div className="card_Container">
            {data.map((i, index) => (
              <div className="hero_card" key={index}>
                <div className="card_Header">
                  <div className="img_card">
                    <img src={i.img} alt="" />
                  </div>
                  <p>{i.title}</p>
                </div>
                <div className="card_content">
                  <p>{i.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
