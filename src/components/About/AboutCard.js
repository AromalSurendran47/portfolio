import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hello, <span className="purple">my name is Ajesh S. </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            I am a Digital marketing professional.
            <br /> <br></br>

            I have knowledge and expertise in the fields of online marketing, 
            <br />
            <br></br>
            brand promotion, SEO, social media management, and data analytics.
            
            <br /> <br></br>
            Apart from digital marketing, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ajesh s</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
