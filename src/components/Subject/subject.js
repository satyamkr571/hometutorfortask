import React from "react";
import "./subject.scss";
import { Card } from "antd";
const { Meta } = Card;

// const subjects = {
//   subject: {
//     mathmeatics: {
//       topics: ["Algebra", "calculas", "Staticss"],
//     },
//     computer: {
//       topics: ["C", "C++", "C#"],
//     },
//   },
// };

export default function Subject() {
  return (
    <div className="subjectBox">
      <div className="container subjectContainer">
        <div className="subjectSubContainer">
          <Card
            className="card-containers"
            title={<h3>Software and Tools</h3>}
            hoverable>
            <div>
              <ul>
                <li>Adobe Photoshope</li>
                <li>Andriod Studio</li>
                <li>AutoCAD</li>
                <li>Confluence</li>
                <li>SketchUP</li>
                <li>SolidWorks</li>
                <li>Unity</li>
                <li>Wordpress</li>
                <li>Xcode</li>
              </ul>
            </div>
            <Meta title="" description="www.perfectprops.com.com" />{" "}
          </Card>
        </div>

        <div className="subjectSubContainer">
          <Card
            className="card-containers"
            title={<h3>Mathmeatics</h3>}
            hoverable>
            <div>
              <ul>
                <li>Algebra</li>
                <li>Calculus</li>
                <li>Differential Equation</li>
                <li> Geometry</li>
                <li> Linear Algebra</li>
                <li>Statistics</li>
                <li>Trigonometry</li>
                <li>Applied Mathmeatics</li>
                <li>Advance Mathmeatics</li>
              </ul>
            </div>
            <Meta title="" description="www.perfectprops.com.com" />{" "}
          </Card>
        </div>

        <div className="subjectSubContainer">
          <Card
            className="card-containers"
            title={<h3>Mechanical </h3>}
            hoverable>
            <div>
              <ul>
                <li>Dynamics</li>
                <li>Fluid Mechanics</li>
                <li>Heat Transfer</li>
                <li>Integration</li>
                <li>Machine Desgine</li>
                <li>Statics</li>
                <li>Strength of Material</li>
                <li>Thermodynamics</li>
                <li>Advanced Machine</li>
              </ul>
            </div>
            <Meta title="" description="www.perfectprops.com.com" />{" "}
          </Card>
        </div>

        <div className="subjectSubContainer">
          <Card
            className="card-containers"
            title={<h3>Electrical </h3>}
            hoverable>
            <div>
              <ul>
                <li>Digital Signle Processing</li>
                <li>Electric Circuits</li>
                <li>Electrical Machines</li>
                <li>Introduction to Power</li>
                <li>Measurement</li>
                <li>Power Electronics</li>
                <li> Telecommunication's Principle</li>
                <li>Signal Theory</li>
              </ul>
            </div>
            <Meta title="" description="www.perfectprops.com.com" />{" "}
          </Card>
        </div>

        <div className="subjectSubContainer">
          <Card
            className="card-containers"
            title={<h3>Chemistry </h3>}
            hoverable>
            <div>
              <ul>
                <li>Inorganic Chemistry</li>
                <li>Organic Chemistry</li>
                <li>Analytical Chemistry</li>
                <li>Physical Chemistry</li>
                <li>Nuclear Radiochemistry</li>
                <li>Computational Chemistry</li>
                <li>Chemical Dynamics and Electrochemistry</li>
                <li>Quantum Chemistry</li>
                <li>Macromolecules</li>
              </ul>
            </div>
            <Meta title="" description="www.perfectprops.com.com" />{" "}
          </Card>
        </div>

        <div className="subjectSubContainer">
          <Card className="card-containers" title={<h3>Physics </h3>} hoverable>
            <div>
              <ul>
                <li>Astronomy and Geology</li>
                <li>
                  Electricity <span>&</span> Magnetism
                </li>
                <li>Fluid Dynamics</li>
                <li>Fundamental of modern and classic Physics</li>
                <li>Geophysics</li>
                <li>Quantum Physics</li>
                <li>Relativity</li>
                <li>Space and Time</li>
                <li>Thermodynamics</li>
              </ul>
            </div>
            <Meta title="" description="www.perfectprops.com.com" />{" "}
          </Card>
        </div>

        <div className="subjectSubContainer">
          <Card
            className="card-containers"
            title={<h3>ComputerLanguage </h3>}
            hoverable>
            <div>
              <ul>
                <li>C</li>
                <li>C++</li>
                <li>C#</li>
                <li>Dart</li>
                <li>GOlang</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>php</li>
                <li>Shell Script</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <Meta title="" description="www.perfectprops.com.com" />{" "}
          </Card>
        </div>

        <div className="subjectSubContainer">
          <Card
            className="card-containers"
            title={<h3>Computer </h3>}
            hoverable>
            <div>
              <ul>
                <li>Linux/Unix</li>
                <li>Computer Architecture and Organisation</li>
                <li>Computer Networks</li>
                <li>Design and Analysis of Algorithms</li>
                <li>Discrete Mathematics</li>
                <li>DBMS</li>
                <li>Operating Systems</li>
                <li>Software Engineering</li>
                <li>Theory of Computation</li>
              </ul>
            </div>
            <Meta title="" description="www.perfectprops.com.com" />{" "}
          </Card>
        </div>
      </div>
    </div>
  );
}
