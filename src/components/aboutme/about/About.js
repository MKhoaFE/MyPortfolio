import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Nguyễn Hoàng Minh Khoa </b> 
                  and I am a <b className="purple">Software engineering </b> 
                    student at <b className="purple">Ho Chi Minh City University of Science. </b>
                      
                <br />
                <br />
                        I am proficient in various programming languages such as &nbsp;
                  <b className="purple">
                    {" "}
                    C, C++, Python, HTML, CSS,  JavaScript and Solidity.{" "}
                  </b>
                <br />
                <br />
                I also have experience working with frameworks and libraries such as &nbsp;

                  <b className="purple">
                    {" "}
                    NodeJS, ReactJS{" "}
                  </b>

              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
