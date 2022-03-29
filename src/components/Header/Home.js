import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import './Home.css'

const Home = () => {
    return (
        <>
            
        
            <Container fluid className="home">
                <Row>
                    <Col sm={7} >
                        <div>
                            <h2 className="h2">STUDY AT HOME &
                                <span> STAY SAFE</span></h2>
                            <h4>This is a new platform of onle learning for all kinds of students.</h4>
                            <p className="p">Review important concepts and explore new topics—the options are endless with Education.com! Join for free today and browse 30,000+ worksheets, online games, lesson plans and more.</p>
                            <Button size="lg" className="btn" variant="info">Get Started</Button>
                        </div>
                    </Col>


                    <Col sm={5}>
                        <img className="home-img" src={"https://gallant-swartz-880f15.netlify.app/static/media/online.1b7b9221.png"} alt="" />
                    </Col>
                </Row>


            </Container>

            <Container className="homecourse">
                <h1>Some of our Special Courses</h1>
                <hr />
                <Courses/>
            </Container>

            <Row>
                <h1 className="h1">From the Coursera community</h1>
                <h5 className="h5">87+ million people are already learning on Coursera</h5><hr />
                <img className="img2" src="https://10minuteschool.com/assets/landing-page/studying.svg" alt="" />
            </Row>

            
        </>
    );
};

export default Home;