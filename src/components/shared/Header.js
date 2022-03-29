import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
   
    return (
        <>
             <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand className="brandStyle" href="#home">Coursa</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Link className="linkStyle" to="/">Home</Link>
                        <Link className="linkStyle" to="/about">About</Link>
                        <Link className="linkStyle" to="/service">Service</Link>
                        <Link className="linkStyle" to="/contact">Contact</Link>
                    </Nav>
                
                    


                           <Button className="btn" variant="warning" >LogOut</Button>
                                 
                                    <Link to="/login">
                                        <Button className="btn" variant="success">Login/Register</Button>
                                    </Link>
                         
                </Container>
            </Navbar>
            <br />
        </>
    );
};

export default Header;