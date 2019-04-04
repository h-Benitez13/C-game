import React from "react";
import "../styles/Navbar.css";

const Navbar = props => (
    
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light ">
        <a className="navbar brand" href="/Clicky-Game/"> Clicky Game - Nostalgic Looney Toons</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="score">Score: {props.score} | Top score: {props.topScore}</li>
       
      </ul>
    </div>
  </nav>
  
)

export default Navbar;