import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import "../assets/cards.css";
import "../assets/modal.css";
import axios from "axios";

const DashboardCards = (props) => {
    const [data2, setData2] = useState();
    const { pageNumber } = props;

    const [show, setShow] = useState(false);
    const handleHide = () => setShow(false);
    const [dataModal, setDataModal] = useState([]);

    const dataOut = (name, image) => {
        let oneCard = [name, image];
        setDataModal((x) => [1, ...oneCard]);

        return setShow(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${props.data.name}`
            );
            setData2(response.data);
        };
        fetchData();
    }, [pageNumber]);

    return (
        <div>
            {data2 && (
                <Col className="my-3" style={{ width: "10rem" }}>
                    <Card className="card-shadow bg-dark text-light">
                        <Card.Img
                            className="card-img"
                            variant="top"
                            src={
                                data2.sprites.other["official-artwork"]
                                    .front_default
                            }
                        />
                        <Card.Body>
                            <Card.Title
                                className="text-center"
                                style={{ fontSize: "16px" }}
                            >
                                <Button
                                    variant="dark"
                                    onClick={() => {
                                        dataOut(
                                            props.data.name,
                                            data2.sprites.other[
                                                "official-artwork"
                                            ].front_default
                                        );
                                    }}
                                >
                                    {props.data.name.toUpperCase()}
                                </Button>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            )}
            <Modal show={show} onHide={handleHide} centered>
                <Modal.Header className="bg-dark text-light">
                    <Modal.Title className="text-uppercase m-auto">
                        {dataModal[1]}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-light p-0 m-0">
                    <Row className="p-2">
                        <Col>
                            <Card.Img
                                variant="top"
                                className="card-img img-fluid"
                                src={dataModal[2]}
                            />
                        </Col>
                        <Col className="justify-content-center align-center">
                            <div className="text-center">
                                <p>$Water Brother</p>
                                <p>Stats:</p>
                                <p>Type:</p>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="bg-dark text-light p-0 m-0">
                    <Button variant="secondary" onClick={handleHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default DashboardCards;
