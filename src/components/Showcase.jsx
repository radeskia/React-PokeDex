import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../img/img1.png";

const Showcase = () => {
    return (
        <div className="bg-light text-dark text-center p-5">
            <Container>
                <div>
                    <Row className="my-5" xs={1} sm={2}>
                        <Col className="p-3">
                            <img
                                src={logo}
                                className="img-fluid"
                                width="400rem"
                                alt=""
                            />{" "}
                        </Col>
                        <Col className="p-3 align-self-center">
                            PokeDex project made in React using react-bootstrap
                            and the pokemon API.
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Showcase;
