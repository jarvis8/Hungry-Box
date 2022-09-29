import React from "react";

import "./Navbar.js";
import "../CSS/Navbar.css";
import "./Footer.js";
import "../CSS/Footer.css";
import "../CSS/Feedback.css";

class Feedback extends React.Component {
  // state = {  }
  render() {
    return (
      <div className="form-structure">
        <form className="form" action="#">
          <div className="insideForm">
            <label htmlFor="Name" target="_blak">
              Name:{" "}
            </label>
            <input
              type="text"
              name="Name"
              id="Name"
              maxLength={20}
              placeholder="Enter full name"
            />
            <br />
            <label htmlFor="age" target="_blank">
              Age:{" "}
            </label>
            <input
              type="number"
              name="age"
              id="age"
              maxLength={2}
              placeholder="Enter age"
            />
            <br />
            <label htmlFor="email" target="_blank">
              Mail ID:{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter mail ID"
            />
            <br />
            <label
              htmlFor="satisfaction"
              name="satisfaction"
              id="satisfaction"
              placeholder="Satisfaction"
            >
              Please rate your overall satisfaction from the analysis
            </label>
            <br />
            <input
              type="checkbox"
              name="satisfaction"
              id="satisfaction"
              placeholder="Satisfaction"
            />
            <label htmlFor="satisfaction" target="_blank">
              Excellent{" "}
            </label>
            <input
              type="checkbox"
              name="satisfaction"
              id="satisfaction"
              placeholder="Satisfaction"
            />
            <label htmlFor="satisfaction" target="_blank">
              Very Good{" "}
            </label>
            <input
              type="checkbox"
              name="satisfaction"
              id="satisfaction"
              placeholder="Satisfaction"
            />
            <label htmlFor="satisfaction" target="_blank">
              Satisfactory{" "}
            </label>
            <input
              type="checkbox"
              name="satisfaction"
              id="satisfaction"
              placeholder="Satisfaction"
            />
            <label htmlFor="satisfaction" target="_blank">
              Unsatisfactory{" "}
            </label>
            <br />
            <div className="txtarea">
              <textarea
                rows={10}
                cols={30}
                placeholder="Your comment..."
                defaultValue={""}
              />
            </div>
            <div className="gender">
              <label htmlFor="gender">Gender: </label>
              <select name="myGender" id="gender">
                <option value="null" selected="" />
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>{" "}
              <br />
            </div>
            <div className="btn-pos">
              <button id="btn1">Submit</button>
              <button id="btn2">Reset</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Feedback;
