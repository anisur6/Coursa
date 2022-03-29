import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div>
            <Container className="mt-5">
                <h2 className="h2">Please Sign Up <span>to Get Access</span></h2>

                <hr />

                <Row>
                    <Col md={6}>


                        <Form  className="text-start">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                    name="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                    name="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="success" type="submit">
                                Login
                            </Button>
                        </Form>
                        <Link to="/register"><p className="text-success fw-bold fs-5"> New User? Please Register</p></Link>
                        <hr />

                        <div className="my-5">
                            <Button onClick={""} className="mx-1" variant="danger"><i class="fab fa-google"> </i>  Sign In With Google</Button>
                        </div>
                    </Col>



                    <Col md={6}>
                        <div className="sideImg">
                            <img src={"https://droneshop-cliant-website.web.app/static/media/login.fc242628.png"} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;