import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{position: "absolute", zIndex: "10", display: "flex", flexDirection: "column", width: "100%", height: "100vh", justifyContent: "center", alignItems: "center"}}>
      <div style={{display: "flex", flexDirection: "column", width: "50%", border: "solid 0.5px rgba(0,0,0,0.5)", borderRadius: "2.5px", justifyContent: "center", alignItems: "center", backgroundColor: "#fff"}}>
        <h1>Let's make something awesome.</h1>
        <h2>Choose your template below to get started:</h2>
        <div style={{display: "flex"}}>
          <Link to="/general"><figure style={{border: "solid 0.5px rgba(0,0,0,0.5)", borderRadius: "2.5px",}}><p>General</p></figure></Link>
          <figure style={{border: "solid 0.5px rgba(0,0,0,0.5)", borderRadius: "2.5px",}}><p>E-Commerce</p></figure>
          <figure style={{border: "solid 0.5px rgba(0,0,0,0.5)", borderRadius: "2.5px",}}><p>Newsletter</p></figure>
          <figure style={{border: "solid 0.5px rgba(0,0,0,0.5)", borderRadius: "2.5px",}}><p>2-Column</p></figure>
        </div>
      </div>
    </div>
  )
};

export default LandingPage;
