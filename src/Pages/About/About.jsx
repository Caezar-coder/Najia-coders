import React from "react";
import "./About.css";

const About = () => {
  const data = [
    {
      title: "Empowering Youth",
      content:
        "NaijaCoder is dedicated to equipping young individuals with valuable coding skills, providing them with tools to build a better future.",
      img: "/round check mark yellow.png",
    },
    {
      title: "Accessible Learning",
      content:
        "It offers an opportunity for everyone intrested in coding to learn, regardless of their background or experience level.",
      img: "/round check mark yellow.png",
    },
    {
      title: "Community Impact",
      content:
        "By learning or volunteering, you are contributing to a cause that drives positive change and supports the growth of tech talent in Nigeria.",
      img: "/round check mark yellow.png",
    },
    {
      title: "Supportive Environment",
      content:
        "Whether you are a learner or a volunteer, NaijaCoder fosters a collaborative and inspiring environment for growth.",
      img: "/round check mark yellow.png",
    },
    {
      title: "Hands-on Experience",
      content:
        "For volunteers, its a chance to share knowledge, gain teaching experience, and build a network within the tech community.",
      img: "/round check mark yellow.png",
    },
    {
      title: "Opportunities to Give Back",
      content:
        "Donating or teaching allows you to play a role in empowering the next generation of tech innovators",
      img: "/round check mark yellow.png",
    },
  ];

  const secondData = [
    {
      img: "/public/Jelani Nelson.png",
      title1: "Jelani Nelson, Ph.d",
      title2: "Lead advisor",
      title3: "Wikipedia link",
    },
    {
      img: "/public/Daniel Alabi.png",
      title1: "Daniel Alabi, Ph.d",
      title2: "President and lead instructor",
      title3: "Website link",
    },
    {
      img: "/public/Lekan Afuye.png",
      title1: "Lekan Afuye, Ph.d",
      title2: "Vice president",
      title3: "Linkdn link",
    },
  ];

  const thirdData = [
    {
      img: "/public/Alida Monaco.png",
      title1: "Alida Monaco, Ph.d",
      title2: "Chief of operations",
      title3: "Linkdn link",
    },
    {
      img: "/public/Philip Abel.png",
      title1: "Philip Abel, Ph.d",
      title2: "Secretary",
      title3: "Linkdn link",
    },
    {
      img: "/public/Benem Davids.png",
      title1: "Benem Davis, Ph.d",
      title2: "Web master",
      title3: "Linkdn link",
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
              and mentorship.
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
        <div className="section_three">
          <div className="team_text">
            <h4>MEET OUR TEAM</h4>
          </div>
          <div className="team-container">
            {secondData.map((i, index) => (
              <div className="team_card" key={index}>
                <img src={i.img} className="teams" />

                <div className="team_text">
                  <h4>{i.title1}</h4>
                  <span>{i.title2}</span>
                  <p>{i.title3}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section_four">
          <div className="team-container">
            {thirdData.map((i, index) => (
              <div className="team_card" key={index}>
                <img src={i.img} className="teams" />

                <div className="team_text">
                  <h4>{i.title1}</h4>
                  <span>{i.title2}</span>
                  <p>{i.title3}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section_four">
          <div className="team-container">
            <div className="team_card">
              <img src="/public/Oluwatobi Alabi.png" className="teams" />

              <div className="team_text">
                <h4>Oluwatobi Alabi</h4>
                <span>Social media manager</span>
                <p>Linkdn Link</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
