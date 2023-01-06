import React from 'react';
import {Container, Image }from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AU from '../img/AU.svg';
const Header = () => {
    return (
        <div className='header'>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="home">
                        <Image src={AU} width={30}/>
                    </Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="aboutme">About Me</Nav.Link>
                            <Nav.Link href="contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse> */}
                </Container>
            </Navbar>
        </div>

    )
}

export default Header