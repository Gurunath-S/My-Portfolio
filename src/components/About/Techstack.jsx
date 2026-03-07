import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiMysql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{ color: "#F7DF1E" }} />
        <h5>JavaScript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{ color: "#339933" }} />
        <h5>Node JS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{ color: "#61DAFB" }} />
        <h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb style={{ color: "#47A248" }} />
        <h5>MongoDB</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs className="dark-svg" style={{ color: "#000000" }} />
        <h5>Next JS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{ color: "#F05032" }} />
        <h5>Git</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql style={{ color: "#4479A1" }} />
        <h5>MySQL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython style={{ color: "#3776AB" }} />
        <h5>Python</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava style={{ color: "#007396" }} />
        <h5>Java</h5>
      </Col>
    </Row>
  );
}

export default Techstack;
