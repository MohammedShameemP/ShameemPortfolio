import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from 'react-on-screen';

import colorSharp2 from "../assets/img/color-sharp2.png";
import Laundryweb from "../assets/img/Laundryweb.png";
import miniecommerce from "../assets/img/miniecommerce.png";
import todo from "../assets/img/todo.png";
import Incubationmanagent from "../assets/img/Incubationmanagent.png";
import 'animate.css';


export const Projects = () => {

  const projects = [
    {
      title: "Laundry Web",
      description: "I have completed projects with expertise in MongoDB, Express.js, React.js, Node.js, Redux Toolkit, Twilio, and Nodemailer. In my Laundry Bin project, I developed a robust user authentication system using JWT, and integrated Twilio for SMS notifications and Nodemailer for email notifications, ensuring seamless communication within the application. My focus is on building scalable and efficient solutions while leveraging modern web technologies.",
      imgUrl: Laundryweb,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: todo,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: miniecommerce,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Incubationmanagent,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> I have successfully created a mini e-commerce platform, a to-do app, and an incubation management system. My main project is a Laundry web application, which showcases my ability to develop comprehensive and scalable solutions. I am dedicated to delivering high-quality work with a focus on efficiency and attention to detail.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
