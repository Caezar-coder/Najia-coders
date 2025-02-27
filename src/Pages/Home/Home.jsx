import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./home.css";

const Home = () => {
  return (
    <div className="homebody">
      {/* section1 */}
      <div className="sec1">
        <h1>Learn to code, Build Your Future.</h1>
        <p>
          NaijaCoder organizes a free, intensive program in Nigeria to teach the
          basics of algorithms and Computer programming to high schoolers. The
          program also provide resources for students applying to universities
          abroad.
          <br /> Programming offers these students, especially those from
          indigent backgrounds, an opportunity to learn profitable skills and
          ignite their passions for problem-solving and critical thinking.
        </p>
        <div className="sec1button">
          <button
            className="learnmore"
            style={{
              textDecoration: "none",
            }}
          >
            <span className="span">Learn more</span>
          </button>

          <button
            className="applynow"
            style={{
              textDecoration: "none",
            }}
          >
            <span className="span1">Apply Now</span>
          </button>
        </div>
      </div>

      {/* section2 */}
      <div className="sec2">
        <img style={{ width: "180px" }} src="\Group 140.png" />

        <div className="sec2img">
          <img src="\pexels-ron-lach-9783812.jpg" />
          <p>providing free instructions on basics of algorithms</p>
        </div>

        <div className="getstarted">
          <p
            style={{
              color: "white",
              fontSize: "18px",

              height: "160px",
              display: "flex",
              justifyContent: "flexend",
              alignItems: "center",
            }}
          >
            Invest in tomorrow's innovators-support our youth coding program
            today
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
            }}
          >
            <button
              className="getstartedbutton"
              style={{
                textDecoration: "none",
              }}
            >
              <span className="getstartedspan">Get Started</span>
            </button>
          </div>
        </div>

        <div className="sec2img">
          <img src="\pexels-tonyzebastian-10011662 (1).jpg" />
          <p>providing free instructions on basics of algorithms</p>
        </div>

        <img style={{ width: "180px" }} src="/Group 141.png" />
      </div>

      <div className="sec3">
        <h2>Our Supporters</h2>
        <div className="supporters">
          <img className="querryimg1" src="/mastercard.jpeg" alt="mastercard" />
          <img
            className="querryimg2"
            src="\simonsFoundation.png"
            alt="SimonsFoundation"
          />
          <img className="querryimg3" src="/Berkeley.png" alt="Berkeley" />
          <img className="querryimg4" src="/mercatus.png" alt="mercatus" />
        </div>
      </div>

      <div className="sec4">
        <h3>Our Gallery</h3>

        <div className="gallery">
          <img src="\WhatsApp Image 2025-02-25 at 14.38.15_0e404587.jpg" />
          <div className="imgBody">
            <img src="\WhatsApp Image 2025-02-25 at 14.52.29_cfa199ef.jpg" />
            <img src="\WhatsApp Image 2025-02-25 at 14.41.53_832e0478.jpg" />
          </div>
          <img src="\WhatsApp Image 2025-02-25 at 14.38.15_871409e4.jpg" />
        </div>
        <div className="seemorediv">
          <button className="seemore">
            See More <IoIosArrowRoundForward size={49} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
