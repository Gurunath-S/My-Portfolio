import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/cartoon.png";
import { ImPointRight } from "react-icons/im";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              I'm a <span className="purple">Software Engineer</span> based in <span className="purple">Tiruppur, India</span>, currently working at a startup where I build and maintain real-world applications across the full stack. I enjoy turning ideas into reliable products and working on both frontend experiences and backend systems.
              <br /><br />
              With a <span className="purple">Bachelor's in Computer Science</span> and an <span className="purple">MCA</span>, I combine strong academic fundamentals with practical development experience. My work mainly involves designing scalable APIs, building responsive user interfaces, and improving product features in production environments.
              <br /><br />
              While I often work with the <b className="purple">MERN stack</b>, I don't limit myself to a single ecosystem. I enjoy exploring different technologies and tools to find the right solution for a problem and continuously grow as an engineer.
            </p>

            <h4 style={{ color: "white", marginTop: "15px", marginBottom: "10px", fontSize: "1.1em" }}>
              Technologies I work with
            </h4>
            <ul style={{ listStyleType: "none", paddingLeft: "0", display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
              {["JavaScript (ES6+)", "TypeScript", "React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Prisma", "Expo / React Native"].map(tech => (
                <li key={tech} style={{ background: "rgba(205, 95, 248, 0.15)", border: "1px solid rgba(205, 95, 248, 0.4)", borderRadius: "20px", padding: "4px 14px", fontSize: "0.85em", color: "#e2c6ff" }}>
                  {tech}
                </li>
              ))}
            </ul>

            {/* <h4 style={{ color: "white", marginBottom: "10px", fontSize: "1.1em" }}>Outside of work</h4>
            <ul style={{ listStyleType: "none", paddingLeft: "15px", fontSize: "1.1em", color: "white" }}>
              <li className="about-activity">
                <ImPointRight /> Watching Football & Exploring Tactical Analysis
              </li>
              <li className="about-activity">
                <ImPointRight /> Exploring New Tech & AI Tools
              </li>
              <li className="about-activity">
                <ImPointRight /> Watching Movies & Listening to Music
              </li>
            </ul> */}
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ maxWidth: "250px", width: "100%", borderRadius: "5%" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Gurunath-S"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/Gurunath_S/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LeetCode Profile"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gurunath-s-85129a217/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:guruthedev20@gmail.com"
                  aria-label="Send Email"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
