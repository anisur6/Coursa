import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './footer.css'

const footer = () => {
    return (
        <div>
              <Container fluid>
                <Row className="footer">

                    <Col sm={6}>
                        <div>
                            <h2 className="brand">Coursa</h2>
                            <h4>A way For something new</h4>
                            <p>Education courses explore the practice of teaching from both an applied and theoretical perspective. Subtopics include educational policy, education
                                technology, K-12 education, and teacher training</p>
                        </div>
                    </Col>

                    <Col sm={3}>
                        <div>
                            <h4 className="brand">Crash Courses</h4>
                            <ul>
                                <li>SSC Crash Course 2022</li>
                                <li>HSC Crash Course 2021</li>
                                <li>HSC Crash Course 2022</li>
                                <li>Pre Admission Medical 2021</li>
                                <li>Microsoft PowerPoint</li>
                            </ul>
                        </div>

                    </Col>


                    <Col sm={3}>
                        <div>
                            <h4 className="brand">Company</h4>

                            <ul>
                                <li>Privacy policy  </li>
                                <li>Terms of use </li>
                                <li>Refund policy  </li>
                                <li>Skills </li>
                            </ul>
                        </div>
                    </Col>
                    <hr />

                    <h5 className="footer-end">Copyright © from 2021-2022 all right reservs</h5>
                </Row>

                
            </Container>
        </div>
    );
};

export default footer;