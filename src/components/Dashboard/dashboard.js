import React from "react";
import bg_img2 from "../../assets/logo.png";
//import bg_img from "../../assets/bg_img_3.jpg"
import { Row, Col } from "react-bootstrap";
import "./dashboard.scss";

export default function Dashboard() {
  return (
    <Row className="rowBg">
      <Col xs={3}>
        <img className="propImg" src={bg_img2} alt="bgimg" />
      </Col>
      <Col xs={9}>
        <div className="card dashboardCard">
          <div className="card-body">
            <div className="aboutUs">
              <span className="higlight">Eminent Experts</span> studied from top
              colleges to <span className="higlight">help you one to one</span>{" "}
              in providing <span className="higlight">best</span> and{" "}
              <span className="higlight">plagiarism free solutions</span> for
              your Doubts, Homework, Assignment and Projects.
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
