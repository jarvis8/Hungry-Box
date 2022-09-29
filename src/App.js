import logo from './logo.svg';
import { Routes, Route } from "react-router-dom"

import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import User_Selection from './Components/User_Selection';
import About from './Components/AboutUs.js';
import Feedback from './Components/Feedback.js';
import StudentLogin from './Components/StudentLogin.js';
import EmployeeLogin from './Components/EmployeeLogin.js';

function App() {
  return (
    <>
    <div className="App">
    <Navbar/>
    <Footer/>
    <Routes>
          <Route path="/" element={<User_Selection />} />
          <Route path="about" element={<About />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="studentLogin" element={<StudentLogin />} />
          <Route path="employeeLogin" element={<EmployeeLogin />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
