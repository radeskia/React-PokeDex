import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <span className="text-warning">Poke</span>Dex
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#api">API</Nav.Link>
                    <Nav.Link href="#database">Database</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
