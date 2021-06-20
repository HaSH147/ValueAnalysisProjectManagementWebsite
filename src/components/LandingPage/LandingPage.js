import React from "react";
import "../../css/LandingPage.css";
import Particles from "react-particles-js";
import picture from "../../assets/man.png";
import circles from "../../assets/Methodize_lp-circles-bg.png";
import { BsCardChecklist } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import { MdAssignment } from "react-icons/md";
import { Button } from "@material-ui/core";
import Logo from "../../assets/Logo";

const LandingPage = () => {
  return (
    <div
       style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        backgroundImage: `linear-gradient(to top right, #79a7d3, #c6d7eb`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        display: "flex",
        height: "100%",
        zIndex: "-2",
        overflow: "hidden",
      }}>
    <Particles
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        zIndex:"-1"
      }}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
          },
        }}
      />
    {/*<div
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        backgroundImage: `linear-gradient(to top right, #ffc13b, #ff6e40)`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        display: "flex",
        height: "100%",
        zIndex: "-2",
        overflow: "hidden",
      }}
    >*/}
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          backgroundImage: `url(${circles})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: "-1",
        }}
      ></div>
      <div className="landing-container">
        <div className="landing-nav-container">
          <div className="landing-nav-logo" style={{ paddingTop: "7px" }}>
            <a href="/">
              <Logo />
            </a>
          </div>
          <div className="landing-nav-sessions">
            <div style={{ marginRight: "20px" }}>
              <a href="/login">
                <button className="landing-nav-login--button">Login</button>
              </a>
            </div>

            <div>
              <a href="/register">
                <button className="landing-nav-register--button">
                  Register
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="landing-main">
          <div className="landing-message">
            <h2
              style={{
                fontSize: "2.6em",
                fontWeight: "200",
                color: "#707070",
                width: "50%",
                marginLeft:"430px",
                marginTop:"120px"
              }}
            >
              <b>The easiest way to manage Team, Projects, and Tasks</b>
            </h2>
          </div>
          <div className="landing-main-picture" >
            <img src={picture} alt="landing" className="landing-picture" width="300px" height="250px" style={{marginLeft:"-430px", marginTop:"-130px"}}/>
          </div>
        </div>
      </div>
</div>
  );
};

export default LandingPage;