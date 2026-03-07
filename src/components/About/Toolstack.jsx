import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiExpo,
  SiFirebase,
  SiLinux,
  SiFedora,
} from "react-icons/si";
import { FaUserShield } from "react-icons/fa";
import cohereImg from "../../Assets/cohere.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows style={{ color: "#0078D6" }} />
        <h5>Windows</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux style={{ color: "#FCC624" }} />
        <h5>Linux</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFedora style={{ color: "#294172" }} />
        <h5>Fedora</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{ color: "#007ACC" }} />
        <h5>VS Code</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman style={{ color: "#FF6C37" }} />
        <h5>Postman</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel className="dark-svg" style={{ color: "#000000" }} />
        <h5>Vercel</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub className="dark-svg" style={{ color: "#181717" }} />
        <h5>Github</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpo className="dark-svg" style={{ color: "#000020" }} />
        <h5>Expo</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUserShield style={{ color: "#6C47FF" }} />
        <h5>Clerk</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase style={{ color: "#FFCA28" }} />
        <h5>Firebase</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={cohereImg}
          alt="Cohere"
          style={{ width: "40px", height: "40px", objectFit: "contain" }}
        />
        <h5>Cohere</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
