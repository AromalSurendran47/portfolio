import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiWindows11,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGoogleads,
  SiMailchimp,
  SiSemrush,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGoogletagmanager />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleanalytics />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleads />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMailchimp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSemrush />
      </Col>


    </Row>
  );
}

export default Toolstack;
