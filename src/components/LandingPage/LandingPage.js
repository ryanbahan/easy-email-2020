import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div style={{position: "absolute", zIndex: "10", display: "flex", flexDirection: "column", width: "100%", height: "100vh", justifyContent: "center", alignItems: "center"}}>
      <p style={{position: "absolute", top: "0.75rem", left: "2.5rem"}}>Easy Email</p>
      <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column", width: "50rem", border: "solid 0.5px rgba(0,0,0,0.5)", borderRadius: "2.5px", justifyContent: "center", alignItems: "center", backgroundColor: "#fff"}}>
        <h1>Let's make something awesome.</h1>
        <h2>Choose your template below to get started:</h2>
        <div style={{display: "flex"}}>
          <Link to="/general">
            <figure>
              <img src={`${process.env.PUBLIC_URL}/easyemail2.png`} alt="general template" style={{width: "100%"}}/>
              <figcaption style={{display: "flex", justifyContent: "center", padding: "0.5rem 0"}}>General</figcaption>
            </figure>
          </Link>
          <Link to="/commerce">
          <figure>
            <img src={`${process.env.PUBLIC_URL}/easyemail2.png`} alt="general template" style={{width: "100%"}}/>
            <figcaption style={{display: "flex", justifyContent: "center", padding: "0.5rem 0"}}>E-commerce</figcaption>
          </figure>
          </Link>
          <Link to="/newsletter">
          <figure>
            <img src={`${process.env.PUBLIC_URL}/easyemail2.png`} alt="general template" style={{width: "100%"}}/>
            <figcaption style={{display: "flex", justifyContent: "center", padding: "0.5rem 0"}}>Newsletter</figcaption>
          </figure>
          </Link>
          <Link to="/2-column">
          <figure>
            <img src={`${process.env.PUBLIC_URL}/easyemail2.png`} alt="general template" style={{width: "100%"}}/>
            <figcaption style={{display: "flex", justifyContent: "center", padding: "0.5rem 0"}}>2-column</figcaption>
          </figure>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default LandingPage;
