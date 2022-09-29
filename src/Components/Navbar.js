import React from 'react'
import '../CSS/Navbar.css'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    // state = {  } 
    render() { 
        return (
            <header>
  <nav className="navbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/feedback">Feedback</Link>
      </li>
    </ul>
    <div className="nav-icon">
        <img src={require("../navicon.jpg")} alt="Img not shown"/>
    </div>
  </nav>
</header>
        );
    }
}

export default Navbar;